import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class InscriptionOrderByWithRelationInputStrict
  implements RestrictProperties<InscriptionOrderByWithRelationInputStrict, Prisma.InscriptionOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class InscriptionOrderByWithRelationInput extends PartialType(
  InscriptionOrderByWithRelationInputStrict,
) {}

@InputType()
export class InscriptionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
