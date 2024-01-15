import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EvaluationEtudiantsOrderByWithRelationInput } from './order-by.args'
import { EvaluationEtudiantsWhereInput, EvaluationEtudiantsWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EvaluationEtudiantsScalarFieldEnum, {
  name: 'EvaluationEtudiantsScalarFieldEnum',
})

@ArgsType()
class FindManyEvaluationEtudiantsArgsStrict
  implements RestrictProperties<FindManyEvaluationEtudiantsArgsStrict, Omit<Prisma.EvaluationEtudiantsFindManyArgs, 'include' | 'select'>>
{
  where: EvaluationEtudiantsWhereInput
  orderBy: EvaluationEtudiantsOrderByWithRelationInput[]
  cursor: EvaluationEtudiantsWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EvaluationEtudiantsScalarFieldEnum])
  distinct: Prisma.EvaluationEtudiantsScalarFieldEnum[]
}

@ArgsType()
export class FindManyEvaluationEtudiantsArgs extends PartialType(
  FindManyEvaluationEtudiantsArgsStrict,
) {}

@ArgsType()
export class FindUniqueEvaluationEtudiantsArgs {
  where: EvaluationEtudiantsWhereUniqueInput
}