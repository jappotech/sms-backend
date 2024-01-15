import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EvaluationEtudiantsWhereUniqueInput {
  id: number
}

@InputType()
export class EvaluationEtudiantsWhereInputStrict implements RestrictProperties<EvaluationEtudiantsWhereInputStrict, Prisma.EvaluationEtudiantsWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EvaluationEtudiantsWhereInput[]
  OR: EvaluationEtudiantsWhereInput[]
  NOT: EvaluationEtudiantsWhereInput[]
}

@InputType()
export class EvaluationEtudiantsWhereInput extends PartialType(
  EvaluationEtudiantsWhereInputStrict,
) {}

@InputType()
export class EvaluationEtudiantsListRelationFilter {
  every?: EvaluationEtudiantsWhereInput
  some?: EvaluationEtudiantsWhereInput
  none?: EvaluationEtudiantsWhereInput
}

@InputType()
export class EvaluationEtudiantsRelationFilter {
  is?: EvaluationEtudiantsWhereInput
  isNot?: EvaluationEtudiantsWhereInput
}
