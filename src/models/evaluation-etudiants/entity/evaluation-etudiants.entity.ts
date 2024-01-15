import { ObjectType } from '@nestjs/graphql'
import { EvaluationEtudiants as EvaluationEtudiantsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EvaluationEtudiants implements RestrictProperties<EvaluationEtudiants,EvaluationEtudiantsType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
