import { Field, ObjectType } from '@nestjs/graphql'
import { Etudiant } from 'src/models/etudiants/entity/etudiant.entity'
import { EvaluationEtudiants } from 'src/models/evaluation-etudiants/entity/evaluation-etudiants.entity'
import { Matiere } from 'src/models/matieres/entity/matiere.entity'
import { NoteEtudiant } from 'src/models/note-etudiants/entity/note-etudiant.entity'
import { UniteEnseignement } from 'src/models/unite-enseignements/entity/unite-enseignement.entity'

@ObjectType()
class ListeNotes {
    @Field({ nullable: true })
    uniteEnseignement: UniteEnseignement

    @Field({ nullable: true })
    notes: Note[]
}

@ObjectType()
class Note {

    @Field({ nullable: true })
    matiere: Matiere

    @Field({ nullable: true })
    note: EvaluationEtudiants[]

    @Field({ nullable: true })
    moyenne: number

    @Field({ nullable: true })
    resultat: boolean
}

@ObjectType()
export class BulletinNotes {
    @Field({ nullable: true })
    etudiant: Etudiant

    @Field({ nullable: true })
    donnees: ListeNotes[]
}
