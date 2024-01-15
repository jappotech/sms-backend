import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class CoursOrderByWithRelationInputStrict
  implements RestrictProperties<CoursOrderByWithRelationInputStrict, Prisma.CoursOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class CoursOrderByWithRelationInput extends PartialType(
  CoursOrderByWithRelationInputStrict,
) {}

@InputType()
export class CoursOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
