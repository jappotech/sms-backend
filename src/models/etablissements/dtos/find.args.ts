import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EtablissementOrderByWithRelationInput } from './order-by.args'
import { EtablissementWhereInput, EtablissementWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EtablissementScalarFieldEnum, {
  name: 'EtablissementScalarFieldEnum',
})

@ArgsType()
class FindManyEtablissementArgsStrict
  implements RestrictProperties<FindManyEtablissementArgsStrict, Omit<Prisma.EtablissementFindManyArgs, 'include' | 'select'>>
{
  where: EtablissementWhereInput
  orderBy: EtablissementOrderByWithRelationInput[]
  cursor: EtablissementWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EtablissementScalarFieldEnum])
  distinct: Prisma.EtablissementScalarFieldEnum[]
}

@ArgsType()
export class FindManyEtablissementArgs extends PartialType(
  FindManyEtablissementArgsStrict,
) {}

@ArgsType()
export class FindUniqueEtablissementArgs {
  where: EtablissementWhereUniqueInput
}