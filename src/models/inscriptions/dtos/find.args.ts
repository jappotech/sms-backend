import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { InscriptionOrderByWithRelationInput } from './order-by.args'
import { InscriptionWhereInput, InscriptionWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.InscriptionScalarFieldEnum, {
  name: 'InscriptionScalarFieldEnum',
})

@ArgsType()
class FindManyInscriptionArgsStrict
  implements RestrictProperties<FindManyInscriptionArgsStrict, Omit<Prisma.InscriptionFindManyArgs, 'include' | 'select'>>
{
  where: InscriptionWhereInput
  orderBy: InscriptionOrderByWithRelationInput[]
  cursor: InscriptionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.InscriptionScalarFieldEnum])
  distinct: Prisma.InscriptionScalarFieldEnum[]
}

@ArgsType()
export class FindManyInscriptionArgs extends PartialType(
  FindManyInscriptionArgsStrict,
) {}

@ArgsType()
export class FindUniqueInscriptionArgs {
  where: InscriptionWhereUniqueInput
}