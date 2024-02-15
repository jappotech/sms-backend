import { Injectable } from '@nestjs/common';
import {
  FindManyBulletinNotesArgs,
  FindUniqueBulletinNotesArgs,
} from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { BulletinNotes } from './entity/bulletin-notes.entity';
import { NoteEtudiant } from '../note-etudiants/entity/note-etudiant.entity';
import { EvaluationEtudiants } from '../evaluation-etudiants/entity/evaluation-etudiants.entity';
import { Etudiant } from '../etudiants/entity/etudiant.entity';

@Injectable()
export class BulletinNotesService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(args: FindUniqueBulletinNotesArgs) {
    const bulletinNotes: BulletinNotes = new BulletinNotes();
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id: args.where.etudiantId },
    });
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
        where: { uniteEnseigmentId: uniteEnseignement.id },
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
              },
              include: { NoteEtudiant: true },
            });
          const notesEtudiant = evaluationEtudiant.filter(
            async (evaluation: EvaluationEtudiants) => {
              const notes = await this.prisma.noteEtudiant.findMany({
                where: { evaluationEtudiantId: evaluation.id },
              });

              const res: NoteEtudiant[] = notes.filter((ne: NoteEtudiant) => {
                return ne.etudiantId === etudiant.id;
              });

              return res.some((x) => x.evaluationEtudiantId === evaluation.id);
            },
          );
          const notesEtd = [];
          for (const n of notesEtudiant) {
            n.NoteEtudiant.forEach((ne: NoteEtudiant) => {
              notesEtd.push(ne);
            });
          }
          noteData.note = notesEtd;
        }
        const moyenneMatiere = (
          noteData.note.reduce((acc, note) => {
            return acc + note.note;
          }, 0) / noteData.note.length
        );
        noteData.moyenne = moyenneMatiere.toFixed(2);
        noteData.moyenneCoeff = (matiere.coefficient * moyenneMatiere).toFixed(2);
        noteData.resultat = noteData.moyenne >= 10 ? true : false;

        g_moyenneTotalCoef += matiere.coefficient * moyenneMatiere;

        notesData.push(noteData);
      }
      // calcul de la moyenne de l'unité d'enseignement
      const moyenneUE = notesData.reduce((acc, note) => {
        return acc + parseFloat(note.moyenne);
      }, 0) / notesData.length;
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
      data.decision = parseFloat(creditObtenu) == parseFloat(totalCredit) ? 'Validé' : 'Invalidé';
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
    const moyenneSemestre = donnees.reduce((acc, ue) => {
      return acc + parseFloat(ue.moyenneUE);
    }, 0) / donnees.length;
    moyenneGenerale.moyenneSemestre = moyenneSemestre.toFixed(2);
    moyenneGenerale.totalCredit = g_totalCredit;
    moyenneGenerale.totalCoef = g_totalCoef;
    moyenneGenerale.nbCreditsObtenus = g_nbCreditsObtenus;
    // TODO: test this moyenneTotalCoef

    console.log("🚀 ~ BulletinNotesService ~ findOne ~ g_moyenneTotalCoef:", g_moyenneTotalCoef)
    moyenneGenerale.moyenneTotalCoef = (Number(g_moyenneTotalCoef)).toFixed(2);

    bulletinNotes.moyenneGenerale = moyenneGenerale;
    return bulletinNotes;
  }
}
