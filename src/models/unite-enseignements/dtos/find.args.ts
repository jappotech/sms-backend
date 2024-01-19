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
  @Field(() => UniteEnseignementWhereInput, { nullable: true })
  where: UniteEnseignementWhereInput

  @Field(() => [UniteEnseignementOrderByWithRelationInput], { nullable: true })
  orderBy: UniteEnseignementOrderByWithRelationInput[]

  @Field(() => UniteEnseignementWhereUniqueInput, { nullable: true })
  cursor: UniteEnseignementWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.UniteEnseignementScalarFieldEnum])
  distinct: Prisma.UniteEnseignementScalarFieldEnum[]
}

@ArgsType()
export class FindManyUniteEnseignementArgs extends PartialType(
  FindManyUniteEnseignementArgsStrict,
) { }

@ArgsType()
export class FindUniqueUniteEnseignementArgs {
  where: UniteEnseignementWhereUniqueInput
}