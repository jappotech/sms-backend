import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ReseauSocialOrderByWithRelationInputStrict
  implements RestrictProperties<ReseauSocialOrderByWithRelationInputStrict, Prisma.ReseauSocialOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class ReseauSocialOrderByWithRelationInput extends PartialType(
  ReseauSocialOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReseauSocialOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
