import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  FindManyBulletinNotesArgs,
  FindUniqueBulletinNotesAnnuelArgs,
  FindUniqueBulletinNotesArgs,
} from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { BulletinNotes, ResultatAnnuel } from './entity/bulletin-notes.entity';
import { NoteEtudiant } from '../note-etudiants/entity/note-etudiant.entity';
import { EvaluationEtudiants } from '../evaluation-etudiants/entity/evaluation-etudiants.entity';
import { Etudiant } from '../etudiants/entity/etudiant.entity';

@Injectable()
export class BulletinNotesService {
  constructor(private readonly prisma: PrismaService) { }

  /*
  Modifier le type de heure debut et heure  fin dans cours
  Mettre Spécialité dans classe, mention dans spécialité et domaine dans mention
  */

  async resultatAnnuel(args: FindUniqueBulletinNotesAnnuelArgs) {
    const classe = await this.prisma.classe.findUnique({
      where: { id: args.where.classeId },
      include: { semestres: true, AnneeScolaire: true },
    });
    if (!classe) {
      throw new NotFoundException('Classe non trouvée');
    }
    const resultats: BulletinNotes[] = [];
    let semestreValide = true;
    let moyenneAnnuelle = 0;
    let totalCredit = 0;
    for (const semestre of classe.semestres) {
      const bulletin = await this.bulletinSemestre({
        where: {
          etudiantId: args.where.etudiantId,
          semestreId: semestre.id,
          classeId: classe.id,
        },
      });
      moyenneAnnuelle += Number(bulletin.moyenneGenerale.moyenneSemestre);
      totalCredit += Number(bulletin.moyenneGenerale.nbCreditsObtenus);
      if (
        bulletin.moyenneGenerale.nbCreditsObtenus <
        bulletin.moyenneGenerale.totalCredit
      ) {
        semestreValide = false;
      }
      resultats.push(bulletin);
    }
    const res: ResultatAnnuel = {
      moyenneAnnuelle: (moyenneAnnuelle / classe.semestres.length).toFixed(2),
      totalCredit,
      resultat: semestreValide ? 'Année Validée' : 'Année Invalidée',
    };

    return res;
  }

  async resultatSemestre(args: FindUniqueBulletinNotesArgs) {
    if (
      !args.where.etudiantId ||
      !args.where.semestreId ||
      !args.where.classeId
    ) {
      throw new BadRequestException('Veuillez renseigner les paramètres');
    }
    let semestreValide = true;
    const bulletin = await this.bulletinSemestre({
      where: {
        etudiantId: args.where.etudiantId,
        semestreId: args.where.semestreId,
        classeId: args.where.classeId,
      },
    });
    if (
      bulletin.moyenneGenerale.nbCreditsObtenus <
      bulletin.moyenneGenerale.totalCredit
    ) {
      semestreValide = false;
    }

    return semestreValide ? 'Semestre Validé' : 'Semestre Invalidé';
  }

  async bulletinAnnuel(args: FindUniqueBulletinNotesAnnuelArgs) {
    const etudiant = await this.prisma.etudiant.findUnique({
      where: {
        id: args.where.etudiantId,
      },
      include: { inscriptions: true },
    });
    if (!etudiant) {
      throw new NotFoundException('Etudiant non trouvé');
    }
    const classe = await this.prisma.classe.findUnique({
      where: { id: args.where.classeId },
      include: { semestres: true, AnneeScolaire: true },
    });
    if (!classe) {
      throw new NotFoundException('Classe non trouvée');
    }
    const resultats: BulletinNotes[] = [];
    for (const semestre of classe.semestres) {
      const bulletin = await this.bulletinSemestre({
        where: {
          etudiantId: etudiant.id,
          semestreId: semestre.id,
          classeId: classe.id,
        },
      });
      resultats.push(bulletin);
    }

    return resultats;
  }

  async bulletinSemestre(args: FindUniqueBulletinNotesArgs) {
    const bulletinNotes: BulletinNotes = new BulletinNotes();
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id: args.where.etudiantId },
    });
    if (!etudiant) {
      throw new NotFoundException('Etudiant non trouvé');
    }
    bulletinNotes.etudiant = etudiant;

    const donnees: any[] = [];

    let g_totalCredit = 0;
    let g_totalCoef = 0;
    let g_nbCreditsObtenus = 0;
    let g_moyenneTotalCoef = 0;
    let countMatiere = 0;

    const uniteEnseignements = await this.prisma.uniteEnseignement.findMany({
      where: { semestreId: args.where.semestreId },
    });

    for (const uniteEnseignement of uniteEnseignements) {
      const data: any = {
        uniteEnseignement: null,
        notes: null,
      };
      data.uniteEnseignement = uniteEnseignement;
      const notesData: any[] = [];
      const matieres = await this.prisma.matiere.findMany({
        where: { uniteEnseignementId: uniteEnseignement.id },
        include: { cours: true },
      });
      for (const matiere of matieres) {
        const noteData: any = {
          matiere: null,
          note: [],
          moyenne: null,
          resultat: null,
        };
        noteData.matiere = matiere;
        g_totalCredit += matiere.credit;
        g_totalCoef += matiere.coefficient;
        countMatiere++;
        const coursList = matiere.cours;
        for (const cours of coursList) {
          const evaluationEtudiant =
            await this.prisma.evaluationEtudiants.findMany({
              where: {
                coursId: cours.id,
                NoteEtudiant: { some: { etudiantId: etudiant.id } },
              },
              include: { NoteEtudiant: true },
            });
          const notesEtudiant = evaluationEtudiant.filter(
            async (evaluation: EvaluationEtudiants) => {
              const notes = await this.prisma.noteEtudiant.findMany({
                where: {
                  evaluationEtudiantId: evaluation.id,
                  etudiantId: etudiant.id,
                },
              });

              return notes.filter(
                (x) => x.evaluationEtudiantId === evaluation.id,
              );
            },
          );
          const notesEtd = [];
          if (notesEtudiant.length > 0) {
            for (const n of notesEtudiant) {
              if (n.NoteEtudiant && n.NoteEtudiant.length > 0) {
                n.NoteEtudiant.forEach((ne: NoteEtudiant) => {
                  if (ne.etudiantId === etudiant.id)
                    // Pas nécessaire mais pour plus de sécurité
                    notesEtd.push(ne);
                });
              }
            }
            noteData.note = notesEtd;
          }
        }
        const moyenneMatiere =
          noteData.note.length > 0
            ? noteData.note.reduce((acc, note) => {
              return acc + note.note;
            }, 0) / noteData.note.length
            : 0;
        noteData.moyenne = moyenneMatiere.toFixed(2);
        noteData.moyenneCoeff = (matiere.coefficient * moyenneMatiere).toFixed(
          2,
        );
        noteData.resultat = noteData.moyenne >= 10 ? true : false;

        g_moyenneTotalCoef += matiere.coefficient * moyenneMatiere;

        notesData.push(noteData);
      }
      // calcul de la moyenne de l'unité d'enseignement
      let moyenneUE = 0;
      if (notesData.length > 0) {
        moyenneUE =
          notesData.reduce((acc, note) => {
            return acc + parseFloat(note.moyenne);
          }, 0) / notesData.length;
      }
      data.moyenneUE = moyenneUE.toFixed(2);
      // calcul du credit obtenu
      const creditObtenu = notesData.reduce((acc, note) => {
        return note.resultat ? acc + note.matiere.credit : acc;
      }, 0);
      data.creditObtenu = creditObtenu;
      g_nbCreditsObtenus += creditObtenu;
      // calcul somme des credits
      const totalCredit = notesData.reduce((acc, note) => {
        return acc + note.matiere.credit;
      }, 0);
      // decision
      data.decision =
        parseFloat(totalCredit) > 0 &&
          parseFloat(creditObtenu) === parseFloat(totalCredit)
          ? 'Validé'
          : 'Invalidé';
      data.notes = notesData;
      donnees.push(data);
    }
    bulletinNotes.donnees = donnees;
    const moyenneGenerale: any = {
      moyenneSemestre: null,
      totalCredit: null,
      totalCoef: null,
      nbCreditsObtenus: null,
      moyenneTotalCoef: null,
    };
    // calcul de la moyenne générale
    let moyenneSemestre = 0;
    if (donnees.length > 0) {
      moyenneSemestre =
        donnees.reduce((acc, ue) => {
          return acc + parseFloat(ue.moyenneUE);
        }, 0) / donnees.length;
    }
    moyenneGenerale.moyenneSemestre = moyenneSemestre.toFixed(2);
    moyenneGenerale.totalCredit = g_totalCredit;
    moyenneGenerale.totalCoef = g_totalCoef;
    moyenneGenerale.nbCreditsObtenus = g_nbCreditsObtenus;
    moyenneGenerale.moyenneTotalCoef = Number(g_moyenneTotalCoef).toFixed(2);

    bulletinNotes.moyenneGenerale = moyenneGenerale;
    return bulletinNotes;
  }

  async generateRandomNotes(args: FindUniqueBulletinNotesArgs) {
    const bulletinNotes: BulletinNotes = new BulletinNotes();
    const etudiants = await this.prisma.etudiant.findMany({
      where: { inscriptions: { some: { classeId: args.where.classeId } } },
    });
    const listBulletinNotes = []

    if (etudiants.length === 0) {
      throw new NotFoundException('Etudiant non trouvé');
    }
    for (const etudiant of etudiants) {
      bulletinNotes.etudiant = etudiant;

      const donnees: any[] = [];

      let g_totalCredit = 0;
      let g_totalCoef = 0;
      let g_nbCreditsObtenus = 0;
      let g_moyenneTotalCoef = 0;
      let countMatiere = 0;

      const uniteEnseignements = await this.prisma.uniteEnseignement.findMany({
        where: { semestreId: args.where.semestreId },
      });

      for (const uniteEnseignement of uniteEnseignements) {
        const data: any = {
          uniteEnseignement: null,
          notes: null,
        };
        data.uniteEnseignement = uniteEnseignement;
        const notesData: any[] = [];
        let matieres = await this.prisma.matiere.findMany({
          where: { uniteEnseignementId: uniteEnseignement.id },
          include: { cours: true },
        });
        for (const matiere of matieres) {
          const noteData: any = {
            matiere: null,
            note: [],
            moyenne: null,
            resultat: null,
          };
          noteData.matiere = matiere;
          g_totalCredit += matiere.credit;
          g_totalCoef += matiere.coefficient;
          countMatiere++;
          let coursList = matiere.cours;
          if (coursList.length === 0) {
            const course = await this.prisma.cours.create({
              data: {
                nom: matiere.nom,
                description: matiere.nom,
                dateDebut: new Date(),
                dateFin: new Date(),
                heureDebut: new Date(),
                heureFin: new Date(),
                matiereId: matiere.id
              },
            });
            coursList.push(course)
          }
          for (const cours of coursList) {
            let evaluationEtudiant = []
            let notesEtudiant = []
            // evaluation et note pour cc
            const cc = await this.prisma.evaluationEtudiants.create({
              data: {
                coursId: cours.id,
                typeEvaluation: 'CONTROLE_CONTINU',
                dateEvaluation: new Date(),
                duree: 3,
                document: 'https://www.google.com',
                description: 'Description',
              },
            });
            console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ cc:", cc)
            evaluationEtudiant.push(cc)
            const note_cc = await this.prisma.noteEtudiant.create({
              data: {
                evaluationEtudiantId: cc.id,
                etudiantId: etudiant.id,
                note: this.getRandomInt(10, 18),
              },
            });
            console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ note_cc:", note_cc)
            notesEtudiant.push(note_cc)
            // evaluation et note pour td
            const exam = await this.prisma.evaluationEtudiants.create({
              data: {
                coursId: cours.id,
                typeEvaluation: 'EXAMEN',
                dateEvaluation: new Date(),
                duree: 3,
                document: 'https://www.google.com',
                description: 'Description',
              },
            });
            console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ exam:", exam)
            evaluationEtudiant.push(exam)
            const note_exam = await this.prisma.noteEtudiant.create({
              data: {
                evaluationEtudiantId: exam.id,
                etudiantId: etudiant.id,
                note: this.getRandomInt(10, 20),
              },
            });
            console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ note_exam:", note_exam)
            notesEtudiant.push(note_exam)

            const notesEtd = [];
            if (notesEtudiant.length > 0) {
              for (const n of notesEtudiant) {
                if (n.NoteEtudiant && n.NoteEtudiant.length > 0) {
                  n.NoteEtudiant.forEach((ne: NoteEtudiant) => {
                    if (ne.etudiantId === etudiant.id)
                      // Pas nécessaire mais pour plus de sécurité
                      notesEtd.push(ne);
                  });
                }
              }
              noteData.note = notesEtd;
            }
          }
          const moyenneMatiere =
            noteData.note.length > 0
              ? noteData.note.reduce((acc, note) => {
                return acc + note.note;
              }, 0) / noteData.note.length
              : 0;
          noteData.moyenne = moyenneMatiere.toFixed(2);
          noteData.moyenneCoeff = (matiere.coefficient * moyenneMatiere).toFixed(
            2,
          );
          noteData.resultat = noteData.moyenne >= 10 ? true : false;

          g_moyenneTotalCoef += matiere.coefficient * moyenneMatiere;

          notesData.push(noteData);
        }
        // calcul de la moyenne de l'unité d'enseignement
        let moyenneUE = 0;
        if (notesData.length > 0) {
          moyenneUE =
            notesData.reduce((acc, note) => {
              return acc + parseFloat(note.moyenne);
            }, 0) / notesData.length;
        }
        data.moyenneUE = moyenneUE.toFixed(2);
        // calcul du credit obtenu
        const creditObtenu = notesData.reduce((acc, note) => {
          return note.resultat ? acc + note.matiere.credit : acc;
        }, 0);
        data.creditObtenu = creditObtenu;
        g_nbCreditsObtenus += creditObtenu;
        // calcul somme des credits
        const totalCredit = notesData.reduce((acc, note) => {
          return acc + note.matiere.credit;
        }, 0);
        // decision
        data.decision =
          parseFloat(totalCredit) > 0 &&
            parseFloat(creditObtenu) === parseFloat(totalCredit)
            ? 'Validé'
            : 'Invalidé';
        data.notes = notesData;
        donnees.push(data);
      }
      bulletinNotes.donnees = donnees;
      const moyenneGenerale: any = {
        moyenneSemestre: null,
        totalCredit: null,
        totalCoef: null,
        nbCreditsObtenus: null,
        moyenneTotalCoef: null,
      };
      // calcul de la moyenne générale
      let moyenneSemestre = 0;
      if (donnees.length > 0) {
        moyenneSemestre =
          donnees.reduce((acc, ue) => {
            return acc + parseFloat(ue.moyenneUE);
          }, 0) / donnees.length;
      }
      moyenneGenerale.moyenneSemestre = moyenneSemestre.toFixed(2);
      moyenneGenerale.totalCredit = g_totalCredit;
      moyenneGenerale.totalCoef = g_totalCoef;
      moyenneGenerale.nbCreditsObtenus = g_nbCreditsObtenus;
      moyenneGenerale.moyenneTotalCoef = Number(g_moyenneTotalCoef).toFixed(2);

      bulletinNotes.moyenneGenerale = moyenneGenerale;
      // return bulletinNotes;
      listBulletinNotes.push(bulletinNotes)
    }

    return listBulletinNotes;
  }

  getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
