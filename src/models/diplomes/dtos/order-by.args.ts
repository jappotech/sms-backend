import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class DiplomeOrderByWithRelationInputStrict
  implements RestrictProperties<DiplomeOrderByWithRelationInputStrict, Prisma.DiplomeOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class DiplomeOrderByWithRelationInput extends PartialType(
  DiplomeOrderByWithRelationInputStrict,
) {}

@InputType()
export class DiplomeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
