import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class FeuillePresenceOrderByWithRelationInputStrict
  implements RestrictProperties<FeuillePresenceOrderByWithRelationInputStrict, Prisma.FeuillePresenceOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class FeuillePresenceOrderByWithRelationInput extends PartialType(
  FeuillePresenceOrderByWithRelationInputStrict,
) {}

@InputType()
export class FeuillePresenceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
