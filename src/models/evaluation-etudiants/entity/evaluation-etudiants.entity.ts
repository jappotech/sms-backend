import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, EvaluationEtudiants as EvaluationEtudiantsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EvaluationEtudiants implements RestrictProperties<EvaluationEtudiants, EvaluationEtudiantsType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field(type => String)
    typeEvaluation: $Enums.TypeEvaluation

    @Field()
    duree: number

    @Field()
    document: string

    @Field()
    description: string

    @Field()
    coursId: number
}
