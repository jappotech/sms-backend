import {
  PrismaClient,
  Role,
  Genre,
  GroupeSanguin,
  TypeDiplome,
} from '@prisma/client';
import { ueData } from './ueData';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // ===== NETTOYAGE DE LA BASE DE DONNÉES =====
  console.log('🗑️ Cleaning existing data...');
  
  // Supprimer dans l'ordre inverse pour respecter les contraintes FK
  await prisma.matiere.deleteMany({});
  console.log('✅ Deleted all Matieres');
  
  await prisma.uniteEnseignement.deleteMany({});
  console.log('✅ Deleted all UniteEnseignements');
  
  await prisma.cours.deleteMany({});
  console.log('✅ Deleted all Cours');
  
  await prisma.inscription.deleteMany({});
  console.log('✅ Deleted all Inscriptions');
  
  await prisma.semestre.deleteMany({});
  console.log('✅ Deleted all Semestres');
  
  await prisma.classe.deleteMany({});
  console.log('✅ Deleted all Classes');
  
  await prisma.salle.deleteMany({});
  console.log('✅ Deleted all Salles');
  
  await prisma.etudiant.deleteMany({});
  console.log('✅ Deleted all Etudiants');
  
  await prisma.professeur.deleteMany({});
  console.log('✅ Deleted all Professeurs');
  
  await prisma.utilisateur.deleteMany({});
  console.log('✅ Deleted all Utilisateurs');
  
  await prisma.account.deleteMany({});
  console.log('✅ Deleted all Accounts');
  
  await prisma.diplome.deleteMany({});
  console.log('✅ Deleted all Diplomes');
  
  await prisma.specialite.deleteMany({});
  console.log('✅ Deleted all Specialites');
  
  await prisma.mention.deleteMany({});
  console.log('✅ Deleted all Mentions');
  
  await prisma.domaine.deleteMany({});
  console.log('✅ Deleted all Domaines');
  
  await prisma.etablissement.deleteMany({});
  console.log('✅ Deleted all Etablissements');
  
  await prisma.reseauSocial.deleteMany({});
  console.log('✅ Deleted all ReseauSociaux');
  
  await prisma.contact.deleteMany({});
  console.log('✅ Deleted all Contacts');
  
  await prisma.adresse.deleteMany({});
  console.log('✅ Deleted all Adresses');

  console.log('🎉 Database cleanup completed!\n');

  // ===== CRÉATION DES NOUVELLES DONNÉES =====
  console.log('📦 Creating new data...');

  // Création d'une adresse pour l'établissement
  const adresse = await prisma.adresse.create({
    data: {
      pays: 'Sénégal',
      region: 'Dakar',
      ville: 'Dakar',
      codePostal: '10000',
      geolocalisation: '14.7167,-17.4677',
    },
  });

  // Création d'un contact pour l'établissement
  const contact = await prisma.contact.create({
    data: {
      telephone: '+221 33 800 80 81',
      fix: '+221 33 000 00 02',
      fax: '+221 33 000 00 03',
      email: 'contact-new@iscom.sn',
      siteWeb: 'www.iscom-edu.sn',
      reseauxSociaux: {
        create: [
          {
            nom: 'Facebook',
            username: 'iscom',
            url: 'https://facebook.com/iscom',
          },
          {
            nom: 'Twitter',
            username: 'iscom',
            url: 'https://twitter.com/iscom',
          },
        ],
      },
    },
  });

  // Création de l'établissement
  const etablissement = await prisma.etablissement.create({
    data: {
      nom: 'Institut Supérieur de Commerce et de Management',
      matricule: 'ET-2025-001',
      sigle: 'ISCOM',
      dateCreation: new Date('2025-01-01'),
      logo: 'logo.png',
      anneeEnCours: '2025-2026',
      adresseId: adresse.id,
      contactId: contact.id,
    },
  });

  console.log('Établissement créé:', etablissement.nom);

  // Création d'un compte administrateur
  const adminPassword = await bcrypt.hash('Iscom2025', 10);
  const adminAccount = await prisma.account.create({
    data: {
      username: 'admin',
      password: adminPassword,
      roles: [Role.ADMIN, Role.SUPER_USER],
      isActive: true,
      userId: 1,
    },
  });

  // Création du profil administrateur
  const adminUser = await prisma.utilisateur.create({
    data: {
      matricule: 'ADM001',
      prenom: 'Alioune Badara',
      nom: 'Diallo',
      genre: Genre.Masculin,
      nationalite: 'Sénégalaise',
      groupeSanguin: GroupeSanguin.O,
      dateNaissance: new Date('1995-09-20'),
      lieuNaissance: 'Dakar',
      cni: '1234567890',
      statutCompte: 'ACTIF',
      roles: [Role.ADMIN, Role.SUPER_USER],
      etablissementId: etablissement.id,
      accountId: adminAccount.id,
      contactId: contact.id,
      adresseId: adresse.id,
    },
  });

  console.log('Administrateur créé:', adminUser.prenom, adminUser.nom);

  // Création du domaine SCIENCES ECONOMIQUES ET DE GESTION
  const domaineSEG = await prisma.domaine.create({
    data: {
      nom: 'SCIENCES ECONOMIQUES ET DE GESTION',
      slug: 'sciences-economiques-et-de-gestion',
      etablissements: {
        connect: { id: etablissement.id },
      },
    },
  });

  console.log('Domaine créé:', domaineSEG.nom);

  // Création de la mention pour le domaine
  const mentionSEG = await prisma.mention.create({
    data: {
      nom: 'Sciences Économiques et de Gestion',
      slug: 'sciences-economiques-et-de-gestion',
      domaineId: domaineSEG.id,
    },
  });

  console.log('Mention créée:', mentionSEG.nom);

  // Création des spécialités
  const specialiteCGF = await prisma.specialite.create({
    data: {
      nom: 'COMPTABILITE ET GESTION FINANCIERE',
      slug: 'comptabilite-et-gestion-financiere',
      mentionId: mentionSEG.id,
      etablissementId: etablissement.id,
    },
  });

  const specialiteMarketing = await prisma.specialite.create({
    data: {
      nom: 'MARKETING',
      slug: 'marketing',
      mentionId: mentionSEG.id,
      etablissementId: etablissement.id,
    },
  });

  console.log(
    'Spécialités créées:',
    specialiteCGF.nom,
    'et',
    specialiteMarketing.nom,
  );

  // Création des diplômes
  const diplomeCGF = await prisma.diplome.create({
    data: {
      nom: 'Licence en Comptabilité et Gestion Financière',
      finalite: 'Professionnelle',
      entite: 'ANAQSUP',
      habilitation: 'N° HAB-2025-001',
      partenaires: ['CESAG', 'Université Cheikh Anta Diop'],
      dateCreation: new Date('2025-01-01'),
      dateHabilitation: new Date('2025-01-15'),
      dateEcheance: new Date('2030-01-15'),
      duree: 36, // 3 ans en mois
      specialiteId: specialiteCGF.id,
    },
  });

  const diplomeMarketing = await prisma.diplome.create({
    data: {
      nom: 'Licence en Marketing',
      finalite: 'Professionnelle',
      entite: 'ANAQSUP',
      habilitation: 'N° HAB-2025-002',
      partenaires: ['CESAG', 'IAM'],
      dateCreation: new Date('2025-01-01'),
      dateHabilitation: new Date('2025-01-15'),
      dateEcheance: new Date('2030-01-15'),
      duree: 36, // 3 ans en mois
      specialiteId: specialiteMarketing.id,
    },
  });

  console.log(
    'Diplômes créés pour les spécialités',
    diplomeCGF.nom,
    'et',
    diplomeMarketing.nom,
  );

  // Création des semestres
  const semestres = await Promise.all([
    // Semestre 1
    prisma.semestre.create({
      data: {
        numero: 1,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
    // Semestre 2
    prisma.semestre.create({
      data: {
        numero: 2,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
    // Semestre 3
    prisma.semestre.create({
      data: {
        numero: 3,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
    // Semestre 4
    prisma.semestre.create({
      data: {
        numero: 4,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
    // Semestre 5
    prisma.semestre.create({
      data: {
        numero: 5,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
    // Semestre 6
    prisma.semestre.create({
      data: {
        numero: 6,
        grade: TypeDiplome.LICENCE_GENERALE,
        dateDebut: new Date('2025-10-01'),
        dateFin: new Date('2026-02-28'),
        nombreSemaine: 20,
        etablissementId: etablissement.id,
      },
    }),
  ]);

  console.log('Semestres créés:', semestres.map((s) => s.numero).join(', '));

  // Création des classes
  const classes = [];

  // Classes pour Comptabilité
  const classeL1C = await prisma.classe.create({
    data: {
      nom: 'Licence 1 Comptabilité',
      code: 'L1C',
      niveau: 'L1',
      etablissementId: etablissement.id,
      specialiteId: specialiteCGF.id,
    },
  });
  classes.push(classeL1C);

  const classeL2C = await prisma.classe.create({
    data: {
      nom: 'Licence 2 Comptabilité',
      code: 'L2C',
      niveau: 'L2',
      etablissementId: etablissement.id,
      specialiteId: specialiteCGF.id,
    },
  });
  classes.push(classeL2C);

  const classeL3C = await prisma.classe.create({
    data: {
      nom: 'Licence 3 Comptabilité',
      code: 'L3C',
      niveau: 'L3',
      etablissementId: etablissement.id,
      specialiteId: specialiteCGF.id,
    },
  });
  classes.push(classeL3C);

  // Classes pour Marketing
  const classeL1M = await prisma.classe.create({
    data: {
      nom: 'Licence 1 Marketing',
      code: 'L1M',
      niveau: 'L1',
      etablissementId: etablissement.id,
      specialiteId: specialiteMarketing.id,
    },
  });
  classes.push(classeL1M);

  const classeL2M = await prisma.classe.create({
    data: {
      nom: 'Licence 2 Marketing',
      code: 'L2M',
      niveau: 'L2',
      etablissementId: etablissement.id,
      specialiteId: specialiteMarketing.id,
    },
  });
  classes.push(classeL2M);

  const classeL3M = await prisma.classe.create({
    data: {
      nom: 'Licence 3 Marketing',
      code: 'L3M',
      niveau: 'L3',
      etablissementId: etablissement.id,
      specialiteId: specialiteMarketing.id,
    },
  });
  classes.push(classeL3M);

  console.log('Classes créées pour les deux spécialités');

  // Création des UEs et des matières à partir de ueData.ts
  console.log('Création des UEs et des matières...');

  // Mapping des codes de classe aux IDs des classes (codes correspondant à ueData.ts)
  const classeCodeToId = {
    // Comptabilité et Gestion
    'L1 CG': classeL1C.id,
    'L2 CG': classeL2C.id,
    'L3 CG': classeL3C.id,
    // Marketing
    'L1 MK': classeL1M.id,
    'L2 MK': classeL2M.id,
    'L3 MK': classeL3M.id,
    // Codes génériques - assigner à la première classe de chaque niveau
    'L1': classeL1C.id,
    'L2': classeL2C.id,
    'L3': classeL3C.id,
  };

  // Mapping des numéros de semestre aux IDs des semestres
  const semestreNumToId = {
    1: semestres[0].id,
    2: semestres[1].id,
    3: semestres[2].id,
    4: semestres[3].id,
    5: semestres[4].id,
    6: semestres[5].id,
  };

  // Création d'un professeur pour les cours
  const profPassword = await bcrypt.hash('Iscom2025', 10);
  const profAccount = await prisma.account.create({
    data: {
      username: 'professeur_iscom',
      password: profPassword,
      roles: [Role.PROFESSEUR],
      isActive: true,
      userId: 2,
    },
  });

  const professeurContact = await prisma.contact.create({
    data: {
      telephone: '+221 77 111 11 12',
      email: 'professeur-new@iscom.sn',
    },
  });

  const professeurUser = await prisma.utilisateur.create({
    data: {
      matricule: 'PROF001',
      prenom: 'Jean',
      nom: 'Dupont',
      genre: Genre.Masculin,
      nationalite: 'Sénégalaise',
      groupeSanguin: GroupeSanguin.A,
      dateNaissance: new Date('1980-06-15'),
      lieuNaissance: 'Dakar',
      cni: '9876543210',
      statutCompte: 'ACTIF',
      roles: [Role.PROFESSEUR],
      etablissementId: etablissement.id,
      accountId: profAccount.id,
      contactId: professeurContact.id,
      adresseId: adresse.id,
    },
  });

  const professeur = await prisma.professeur.create({
    data: {
      profileId: professeurUser.id,
    },
  });

  // Création d'une salle pour les cours
  const salle = await prisma.salle.create({
    data: {
      nom: 'Salle 101',
      capacite: 50,
      batiment: 'Bâtiment A',
      etablissementId: etablissement.id,
      estDisponible: true,
    },
  });

  // Création des UEs, des matières et des cours
  for (const ue of ueData) {
    const classeId = classeCodeToId[ue.classeCode];
    const semestreId = semestreNumToId[ue.semestre];

    if (!classeId || !semestreId) continue;

    // Création de l'UE
    const createdUE = await prisma.uniteEnseignement.create({
      data: {
        code: ue.code,
        nom: ue.nom,
        numero: ue.numero,
        credit: ue.credit,
        semestreId: semestreId,
        classeId: classeId,
      },
    });

    // Création des matières et des cours pour cette UE
    for (const matiere of ue.matieres) {
      const createdMatiere = await prisma.matiere.create({
        data: {
          code: matiere.code,
          nom: matiere.nom,
          credit: matiere.credit,
          coefficient: matiere.coefficient,
          nbHeure: matiere.credit * 25, // 1 crédit = 25 heures
          uniteEnseignementId: createdUE.id,
        },
      });

      // Création d'un cours pour cette matière
      await prisma.cours.create({
        data: {
          nom: matiere.nom,
          description: `Cours de ${matiere.nom} pour la classe ${ue.classeCode}`,
          dateDebut: new Date('2025-10-01'),
          dateFin: new Date('2026-02-28'),
          heureDebut: new Date('2025-10-01T08:00:00Z'),
          heureFin: new Date('2025-10-01T10:00:00Z'),
          matiereId: createdMatiere.id,
          classeId: classeId,
          professeurId: professeur.id,
          salleId: salle.id,
        },
      });
    }
  }

  console.log('Seeding terminé avec succès!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
