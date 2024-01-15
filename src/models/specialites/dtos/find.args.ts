import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SpecialiteOrderByWithRelationInput } from './order-by.args'
import { SpecialiteWhereInput, SpecialiteWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SpecialiteScalarFieldEnum, {
  name: 'SpecialiteScalarFieldEnum',
})

@ArgsType()
class FindManySpecialiteArgsStrict
  implements RestrictProperties<FindManySpecialiteArgsStrict, Omit<Prisma.SpecialiteFindManyArgs, 'include' | 'select'>>
{
  where: SpecialiteWhereInput
  orderBy: SpecialiteOrderByWithRelationInput[]
  cursor: SpecialiteWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SpecialiteScalarFieldEnum])
  distinct: Prisma.SpecialiteScalarFieldEnum[]
}

@ArgsType()
export class FindManySpecialiteArgs extends PartialType(
  FindManySpecialiteArgsStrict,
) {}

@ArgsType()
export class FindUniqueSpecialiteArgs {
  where: SpecialiteWhereUniqueInput
}