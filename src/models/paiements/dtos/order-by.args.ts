import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class PaiementOrderByWithRelationInputStrict
  implements RestrictProperties<PaiementOrderByWithRelationInputStrict, Prisma.PaiementOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class PaiementOrderByWithRelationInput extends PartialType(
  PaiementOrderByWithRelationInputStrict,
) {}

@InputType()
export class PaiementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
