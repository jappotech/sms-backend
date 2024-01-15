import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UniteEnseignementOrderByWithRelationInput } from './order-by.args'
import { UniteEnseignementWhereInput, UniteEnseignementWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.UniteEnseignementScalarFieldEnum, {
  name: 'UniteEnseignementScalarFieldEnum',
})

@ArgsType()
class FindManyUniteEnseignementArgsStrict
  implements RestrictProperties<FindManyUniteEnseignementArgsStrict, Omit<Prisma.UniteEnseignementFindManyArgs, 'include' | 'select'>>
{
  where: UniteEnseignementWhereInput
  orderBy: UniteEnseignementOrderByWithRelationInput[]
  cursor: UniteEnseignementWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.UniteEnseignementScalarFieldEnum])
  distinct: Prisma.UniteEnseignementScalarFieldEnum[]
}

@ArgsType()
export class FindManyUniteEnseignementArgs extends PartialType(
  FindManyUniteEnseignementArgsStrict,
) {}

@ArgsType()
export class FindUniqueUniteEnseignementArgs {
  where: UniteEnseignementWhereUniqueInput
}