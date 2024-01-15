import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MentionOrderByWithRelationInput } from './order-by.args'
import { MentionWhereInput, MentionWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.MentionScalarFieldEnum, {
  name: 'MentionScalarFieldEnum',
})

@ArgsType()
class FindManyMentionArgsStrict
  implements RestrictProperties<FindManyMentionArgsStrict, Omit<Prisma.MentionFindManyArgs, 'include' | 'select'>>
{
  where: MentionWhereInput
  orderBy: MentionOrderByWithRelationInput[]
  cursor: MentionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MentionScalarFieldEnum])
  distinct: Prisma.MentionScalarFieldEnum[]
}

@ArgsType()
export class FindManyMentionArgs extends PartialType(
  FindManyMentionArgsStrict,
) {}

@ArgsType()
export class FindUniqueMentionArgs {
  where: MentionWhereUniqueInput
}