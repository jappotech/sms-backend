import { Injectable } from '@nestjs/common'
import { FindManyBulletinNotesArgs, FindUniqueBulletinNotesArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { BulletinNotes } from './entity/bulletin-notes.entity'
import { NoteEtudiant } from '../note-etudiants/entity/note-etudiant.entity'
import { EvaluationEtudiants } from '../evaluation-etudiants/entity/evaluation-etudiants.entity'
import { Etudiant } from '../etudiants/entity/etudiant.entity'

@Injectable()
export class BulletinNotesService {
  constructor(private readonly prisma: PrismaService) { }

  findAll(args: FindManyBulletinNotesArgs) {
    if (!args.where.classeId) return []
    // return this.prisma.bulletinNotes.findMany(args)
    return []
  }

  async findOne(args: FindUniqueBulletinNotesArgs) {
    let bulletinNotes: BulletinNotes = new BulletinNotes();
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id: args.where.etudiantId }
    })
    bulletinNotes.etudiant = etudiant

    let donnees: any[] = []

    const uniteEnseignements = await this.prisma.uniteEnseignement.findMany({
      where: { semestreId: args.where.semestreId }
    })

    for (const uniteEnseignement of uniteEnseignements) {
      let data: any = {
        uniteEnseignement: null,
        notes: null
      };
      data.uniteEnseignement = uniteEnseignement
      let notesData: any[] = []
      const matieres = await this.prisma.matiere.findMany({
        where: { uniteEnseigmentId: uniteEnseignement.id },
        include: { cours: true }
      })
      for (const matiere of matieres) {
        let noteData: any = {
          matiere: null,
          note: [],
          moyenne: null,
          resultat: null
        };
        noteData.matiere = matiere
        const coursList = matiere.cours
        for (const cours of coursList) {
          const evaluationEtudiant = await this.prisma.evaluationEtudiants.findMany({
            where: {
              coursId: cours.id,
            },
            include: { NoteEtudiant: true }
          })
          const notesEtudiant = evaluationEtudiant.filter(async (evaluation: EvaluationEtudiants) => {
            const notes = await this.prisma.noteEtudiant.findMany({
              where: { evaluationEtudiantId: evaluation.id }
            })

            const res: NoteEtudiant[] = notes.filter((ne: NoteEtudiant) => {
              return ne.etudiantId === etudiant.id
            })

            return res.some(x => x.evaluationEtudiantId === evaluation.id)
          })
          const notesEtd = []
          for (const n of notesEtudiant) {
            n.NoteEtudiant.forEach((ne: NoteEtudiant) => {
              notesEtd.push(ne)
            })
          }
          noteData.note = notesEtd
        }
        noteData.moyenne = (noteData.note.reduce((acc, note) => {
          return acc + note.note
        }, 0) / noteData.note.length).toFixed(2)
        noteData.resultat = noteData.moyenne >= 10 ? true : false

        notesData.push(noteData)
      }
      data.notes = notesData
      donnees.push(data)
    }
    bulletinNotes.donnees = donnees

    return bulletinNotes
  }

}
