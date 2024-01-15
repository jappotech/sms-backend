import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UtilisateurOrderByWithRelationInput } from './order-by.args'
import { UtilisateurWhereInput, UtilisateurWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.UtilisateurScalarFieldEnum, {
  name: 'UtilisateurScalarFieldEnum',
})

@ArgsType()
class FindManyUtilisateurArgsStrict
  implements RestrictProperties<FindManyUtilisateurArgsStrict, Omit<Prisma.UtilisateurFindManyArgs, 'include' | 'select'>>
{
  where: UtilisateurWhereInput
  orderBy: UtilisateurOrderByWithRelationInput[]
  cursor: UtilisateurWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.UtilisateurScalarFieldEnum])
  distinct: Prisma.UtilisateurScalarFieldEnum[]
}

@ArgsType()
export class FindManyUtilisateurArgs extends PartialType(
  FindManyUtilisateurArgsStrict,
) {}

@ArgsType()
export class FindUniqueUtilisateurArgs {
  where: UtilisateurWhereUniqueInput
}