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
  @Field(() => UtilisateurWhereInput, { nullable: true })
  where: UtilisateurWhereInput

  @Field(() => [UtilisateurOrderByWithRelationInput], { nullable: true })
  orderBy: UtilisateurOrderByWithRelationInput[]

  @Field(() => UtilisateurWhereInput, { nullable: true })
  cursor: UtilisateurWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.UtilisateurScalarFieldEnum])
  distinct: Prisma.UtilisateurScalarFieldEnum[]
}

@ArgsType()
export class FindManyUtilisateurArgs extends PartialType(
  FindManyUtilisateurArgsStrict,
) { }

@ArgsType()
export class FindUniqueUtilisateurArgs {
  where: UtilisateurWhereUniqueInput
}