import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SpecialiteOrderByWithRelationInputStrict
  implements RestrictProperties<SpecialiteOrderByWithRelationInputStrict, Prisma.SpecialiteOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class SpecialiteOrderByWithRelationInput extends PartialType(
  SpecialiteOrderByWithRelationInputStrict,
) {}

@InputType()
export class SpecialiteOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
