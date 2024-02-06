import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, NoteEtudiant as NoteEtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class NoteEtudiant implements RestrictProperties<NoteEtudiant, NoteEtudiantType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    note: number

    @Field({ nullable: true })
    evaluationEtudiantId: number

    @Field({ nullable: true })
    etudiantId: number

}
