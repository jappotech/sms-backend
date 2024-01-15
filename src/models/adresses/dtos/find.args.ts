import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AdresseOrderByWithRelationInput } from './order-by.args'
import { AdresseWhereInput, AdresseWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AdresseScalarFieldEnum, {
  name: 'AdresseScalarFieldEnum',
})

@ArgsType()
class FindManyAdresseArgsStrict
  implements RestrictProperties<FindManyAdresseArgsStrict, Omit<Prisma.AdresseFindManyArgs, 'include' | 'select'>>
{
  where: AdresseWhereInput
  orderBy: AdresseOrderByWithRelationInput[]
  cursor: AdresseWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AdresseScalarFieldEnum])
  distinct: Prisma.AdresseScalarFieldEnum[]
}

@ArgsType()
export class FindManyAdresseArgs extends PartialType(
  FindManyAdresseArgsStrict,
) {}

@ArgsType()
export class FindUniqueAdresseArgs {
  where: AdresseWhereUniqueInput
}