import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ContactOrderByWithRelationInputStrict
  implements RestrictProperties<ContactOrderByWithRelationInputStrict, Prisma.ContactOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class ContactOrderByWithRelationInput extends PartialType(
  ContactOrderByWithRelationInputStrict,
) {}

@InputType()
export class ContactOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
