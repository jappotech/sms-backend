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

  @Field(() => EtablissementWhereInput, { nullable: true })
  where: EtablissementWhereInput

  @Field(() => [EtablissementOrderByWithRelationInput], { nullable: true })
  orderBy: EtablissementOrderByWithRelationInput[]

  @Field(() => EtablissementWhereUniqueInput, { nullable: true })
  cursor: EtablissementWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.EtablissementScalarFieldEnum])
  distinct: Prisma.EtablissementScalarFieldEnum[]
}

@ArgsType()
export class FindManyEtablissementArgs extends PartialType(
  FindManyEtablissementArgsStrict,
) { }

@ArgsType()
export class FindUniqueEtablissementArgs {
  where: EtablissementWhereUniqueInput
}