import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PaiementOrderByWithRelationInput } from './order-by.args'
import { PaiementWhereInput, PaiementWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.PaiementScalarFieldEnum, {
  name: 'PaiementScalarFieldEnum',
})

@ArgsType()
class FindManyPaiementArgsStrict
  implements RestrictProperties<FindManyPaiementArgsStrict, Omit<Prisma.PaiementFindManyArgs, 'include' | 'select'>>
{
  where: PaiementWhereInput
  orderBy: PaiementOrderByWithRelationInput[]
  cursor: PaiementWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.PaiementScalarFieldEnum])
  distinct: Prisma.PaiementScalarFieldEnum[]
}

@ArgsType()
export class FindManyPaiementArgs extends PartialType(
  FindManyPaiementArgsStrict,
) {}

@ArgsType()
export class FindUniquePaiementArgs {
  where: PaiementWhereUniqueInput
}