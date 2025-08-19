import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { randomUUID } from 'crypto';
import * as XLSX from 'xlsx';
import { ImportInscriptionsInput } from './dtos/import-inscriptions.input';

@Injectable()
export class InscriptionsService {
  constructor(private prisma: PrismaService) {}

  async create(createInscriptionInput: any) {
    const { diplomeId, etudiantId, classeId, ...rest } = createInscriptionInput ?? {};
    if (!etudiantId || !classeId) {
      throw new BadRequestException('etudiantId et classeId sont requis pour créer une inscription');
    }
    const reference = `${etudiantId}-${randomUUID().split('-')[0]}`.toUpperCase();

    // Determine diplomeId: prefer provided; otherwise infer from classe.specialite
    let computedDiplomeId = diplomeId as number | undefined;
    if (!computedDiplomeId) {
      const classe = await this.prisma.classe.findUnique({
        where: { id: Number(classeId) },
        select: { specialiteId: true },
      });
      if (classe?.specialiteId) {
        const existingDiplome = await this.prisma.diplome.findFirst({
          where: { specialiteId: classe.specialiteId },
          orderBy: { id: 'asc' },
        });
        if (existingDiplome) {
          computedDiplomeId = existingDiplome.id;
        } else {
          // Create a minimal default Diplome for this specialite to satisfy FK
          const now = new Date();
          const oneYearLater = new Date(now.getTime());
          oneYearLater.setFullYear(now.getFullYear() + 1);
          const created = await this.prisma.diplome.create({
            data: {
              nom: 'Diplôme par défaut',
              finalite: 'Auto-généré pour inscription',
              entite: 'AUTO',
              habilitation: 'AUTO',
              partenaires: [],
              dateCreation: now,
              dateHabilitation: now,
              dateEcheance: oneYearLater,
              duree: 12,
              specialiteId: classe.specialiteId,
            },
          });
          computedDiplomeId = created.id;
        }
      } else {
        // Fallback: as last resort prevent failure with a clear error
        throw new BadRequestException(
          "Impossible de déterminer le diplôme: la classe n'a pas de spécialité associée et aucun diplomeId n'a été fourni.",
        );
      }
    }

    return this.prisma.inscription.create({
      data: {
        ...rest,
        etudiantId: Number(etudiantId),
        classeId: Number(classeId),
        diplomeId: Number(computedDiplomeId),
        reference,
      },
    });
  }

  async findAll(args?: any) {
    return this.prisma.inscription.findMany(args);
  }

  async findAllByEtablissement(args: any, id: number) {
    return this.prisma.inscription.findMany({
      ...args,
      where: {
        ...args.where,
        classe: {
          is: {
            etablissementId: {
              equals: id,
            },
          },
        },
      },
    });
  }

  async findOne(args: any) {
    return this.prisma.inscription.findUnique(args);
  }

  async update(updateInscriptionInput: any) {
    const { id, ...data } = updateInscriptionInput;
    return this.prisma.inscription.update({
      where: { id },
      data: data,
    });
  }

  async remove(args: any) {
    return this.prisma.inscription.delete(args);
  }

  async importFromFile(input: ImportInscriptionsInput) {
    const {
      file,
      classeId,
      typePaiement = 'CASH',
      statut = 'EN_ATTENTE',
      sheetName,
    } = input;
    const { mimetype, createReadStream } = await file;
    let inscriptionsData = [];
    
    // Conversion du classeId en nombre
    const classeIdNumber = parseInt(classeId, 10);
    if (isNaN(classeIdNumber)) {
      throw new BadRequestException('Le classeId doit être un nombre valide.');
    }

    if (
      mimetype ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      mimetype === 'application/vnd.ms-excel'
    ) {
      const fileBuffer = await this.readFileToBuffer(createReadStream());
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

      // Utiliser le nom de feuille specifié ou la première feuille par défaut
      let worksheetName = workbook.SheetNames[0]; // Par défaut, première feuille

      if (sheetName && workbook.SheetNames.includes(sheetName)) {
        worksheetName = sheetName;
      } else if (sheetName) {
        throw new BadRequestException(
          `La feuille "${sheetName}" n'existe pas dans le fichier Excel.`,
        );
      }

      const worksheet = workbook.Sheets[worksheetName];
      inscriptionsData = XLSX.utils.sheet_to_json(worksheet);
    } else if (mimetype === 'text/csv') {
      inscriptionsData = await this.parseCSV(createReadStream);
    } else {
      throw new BadRequestException(
        'Format de fichier non pris en charge. Veuillez utiliser Excel (.xlsx, .xls) ou CSV.',
      );
    }

    // Validation des données
    if (!inscriptionsData || inscriptionsData.length === 0) {
      throw new BadRequestException(
        'Le fichier ne contient pas de données valides.',
      );
    }

    // Traiter chaque ligne du fichier
    const createdInscriptions = [];

    for (const data of inscriptionsData) {
      // Vérifier que les données requises sont présentes
      if (!data.email || !data.nom || !data.prenom) {
        continue; // Ignorer les lignes sans données suffisantes
      }

      // Chercher ou créer l'étudiant
      // Handle both possible return types from getOrCreateEtudiant
      const result = await this.getOrCreateEtudiant(data);
      const etudiant = 'etudiant' in result ? result.etudiant : result;

      // Créer l'inscription
      // Créer l'inscription en utilisant le classeId converti et en ajoutant diplomeId requis
      const inscription = await this.prisma.inscription.create({
        data: {
          etudiantId: etudiant.id,
          classeId: classeIdNumber,
          statut,
          reference: `${etudiant.id}-${randomUUID().split('-')[0]}`.toUpperCase(),
          premiereInscription: true,
          diplomeId: 1, // Valeur par défaut pour satisfaire le schéma
        },
      });

      createdInscriptions.push(inscription);
    }

    // Réponse avec le nombre d'inscriptions créées
    return { success: true, count: createdInscriptions.length };
  }

  private async readFileToBuffer(readStream: any): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      const chunks = [];
      readStream.on('data', (chunk) => chunks.push(chunk));
      readStream.on('error', reject);
      readStream.on('end', () => resolve(Buffer.concat(chunks)));
    });
  }

  private async parseCSV(
    createReadStream: () => NodeJS.ReadableStream,
  ): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const data: any[] = [];
      const stream = createReadStream();
      let csvData = '';

      stream.on('data', (chunk) => {
        csvData += chunk.toString();
      });

      stream.on('end', () => {
        // Simple CSV parsing (header,data format)
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
          if (!lines[i].trim()) continue;

          const values = lines[i].split(',');
          const entry = {};

          for (let j = 0; j < headers.length; j++) {
            entry[headers[j].trim()] = values[j] ? values[j].trim() : null;
          }

          data.push(entry);
        }

        resolve(data);
      });

      stream.on('error', (error: Error) => reject(error));
    });
  }

  private async getOrCreateEtudiant(data: any) {
    if (!data.email || !data.nom || !data.prenom) {
      throw new BadRequestException(
        "Les données doivent contenir au minimum: email, nom et prénom de l'étudiant",
      );
    }

    // Vérifier si l'utilisateur existe déjà par email
    let utilisateur = await this.prisma.utilisateur.findFirst({
      where: {
        contact: {
          email: data.email,
        },
      },
      include: {
        etudiant: true,
      },
    });

    // Si l'utilisateur et l'étudiant existent, retourner l'étudiant
    if (utilisateur && utilisateur.etudiant) {
      return { etudiant: utilisateur.etudiant };
    }

    // Si l'utilisateur existe mais pas l'étudiant, créer l'étudiant
    if (utilisateur) {
      return await this.prisma.etudiant.create({
        data: {
          ine: `INE-${randomUUID().split('-')[0]}`.toUpperCase(),
          profile: {
            connect: {
              id: utilisateur.id,
            },
          },
        },
      });
    }

    // Créer un nouveau contact
    const contact = await this.prisma.contact.create({
      data: {
        email: data.email,
        telephone: data.telephone || `TEL-${randomUUID().split('-')[0]}`, // Téléphone requis
      },
    });

    // Créer un nouvel utilisateur
    const nouvelUtilisateur = await this.prisma.utilisateur.create({
      data: {
        matricule: `MAT-${randomUUID().split('-')[0]}`.toUpperCase(),
        prenom: data.prenom,
        nom: data.nom,
        genre: 'Masculin', // Valeur par défaut
        contact: {
          connect: {
            id: contact.id,
          },
        },
      },
    });
    // Create a compatible structure that includes the etudiant property
    utilisateur = { ...nouvelUtilisateur, etudiant: null };

    // Créer l'étudiant lié à l'utilisateur
    const etudiant = await this.prisma.etudiant.create({
      data: {
        ine: `INE-${randomUUID().split('-')[0]}`.toUpperCase(),
        profile: {
          connect: {
            id: utilisateur.id,
          },
        },
      },
    });
    return { etudiant };
  }
}
