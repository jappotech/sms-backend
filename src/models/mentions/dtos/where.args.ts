import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class MentionWhereUniqueInput {
  id: number
}

@InputType()
export class MentionWhereInputStrict implements RestrictProperties<MentionWhereInputStrict, Prisma.MentionWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: MentionWhereInput[]
  OR: MentionWhereInput[]
  NOT: MentionWhereInput[]
}

@InputType()
export class MentionWhereInput extends PartialType(
  MentionWhereInputStrict,
) {}

@InputType()
export class MentionListRelationFilter {
  every?: MentionWhereInput
  some?: MentionWhereInput
  none?: MentionWhereInput
}

@InputType()
export class MentionRelationFilter {
  is?: MentionWhereInput
  isNot?: MentionWhereInput
}
