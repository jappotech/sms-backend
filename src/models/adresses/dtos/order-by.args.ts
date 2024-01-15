import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AdresseOrderByWithRelationInputStrict
  implements RestrictProperties<AdresseOrderByWithRelationInputStrict, Prisma.AdresseOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class AdresseOrderByWithRelationInput extends PartialType(
  AdresseOrderByWithRelationInputStrict,
) {}

@InputType()
export class AdresseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
