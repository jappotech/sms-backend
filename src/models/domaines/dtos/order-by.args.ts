import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class DomaineOrderByWithRelationInputStrict
  implements RestrictProperties<DomaineOrderByWithRelationInputStrict, Prisma.DomaineOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class DomaineOrderByWithRelationInput extends PartialType(
  DomaineOrderByWithRelationInputStrict,
) {}

@InputType()
export class DomaineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
