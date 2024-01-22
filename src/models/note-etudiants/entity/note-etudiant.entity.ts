import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, NoteEtudiant as NoteEtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class NoteEtudiant implements RestrictProperties<NoteEtudiant, NoteEtudiantType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    note: number

    @Field(type => String)
    typeEvaluation: $Enums.TypeEvaluation

    @Field()
    evaluationEtudiantId: number

    @Field()
    etudiantId: number

    @Field()
    coursId: number
}
