import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, EvaluationEtudiants as EvaluationEtudiantsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EvaluationEtudiants implements RestrictProperties<EvaluationEtudiants, EvaluationEtudiantsType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    dateEvaluation: Date

    @Field(type => String)
    typeEvaluation: $Enums.TypeEvaluation

    @Field({ nullable: true })
    duree: number

    @Field({ nullable: true })
    document: string

    @Field({ nullable: true })
    description: string

    @Field({ nullable: true })
    coursId: number
}
