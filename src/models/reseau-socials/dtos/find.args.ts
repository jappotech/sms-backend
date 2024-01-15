import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReseauSocialOrderByWithRelationInput } from './order-by.args'
import { ReseauSocialWhereInput, ReseauSocialWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ReseauSocialScalarFieldEnum, {
  name: 'ReseauSocialScalarFieldEnum',
})

@ArgsType()
class FindManyReseauSocialArgsStrict
  implements RestrictProperties<FindManyReseauSocialArgsStrict, Omit<Prisma.ReseauSocialFindManyArgs, 'include' | 'select'>>
{
  where: ReseauSocialWhereInput
  orderBy: ReseauSocialOrderByWithRelationInput[]
  cursor: ReseauSocialWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ReseauSocialScalarFieldEnum])
  distinct: Prisma.ReseauSocialScalarFieldEnum[]
}

@ArgsType()
export class FindManyReseauSocialArgs extends PartialType(
  FindManyReseauSocialArgsStrict,
) {}

@ArgsType()
export class FindUniqueReseauSocialArgs {
  where: ReseauSocialWhereUniqueInput
}