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
    console.log("🚀 ~ BulletinNotesService ~ findOne ~ args:", args?.where)
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
          const noteEtudiant = await this.prisma.evaluationEtudiants.findMany({
            where: {
              coursId: cours.id,
            },
            include: { NoteEtudiant: true }
          })
          const notesEtudiant = noteEtudiant.filter((note) => {
            const res: NoteEtudiant[] = note.NoteEtudiant.filter((ne: NoteEtudiant) => {
              return ne.etudiantId === etudiant.id
            })

            return res
          })
          noteData.note = notesEtudiant
        }
        noteData.moyenne = noteData.note.reduce((acc, note: NoteEtudiant) => {
          return acc + note.note
        }) / noteData.note.length
        noteData.resultat = noteData.moyenne >= 10 ? true : false
      }
      data.notes = notesData
    }
    bulletinNotes.donnees = donnees

    return bulletinNotes
  }

}
