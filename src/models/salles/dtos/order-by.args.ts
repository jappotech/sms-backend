import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SalleOrderByWithRelationInputStrict
  implements RestrictProperties<SalleOrderByWithRelationInputStrict, Prisma.SalleOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class SalleOrderByWithRelationInput extends PartialType(
  SalleOrderByWithRelationInputStrict,
) {}

@InputType()
export class SalleOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
