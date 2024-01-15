import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class MentionOrderByWithRelationInputStrict
  implements RestrictProperties<MentionOrderByWithRelationInputStrict, Prisma.MentionOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class MentionOrderByWithRelationInput extends PartialType(
  MentionOrderByWithRelationInputStrict,
) {}

@InputType()
export class MentionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
