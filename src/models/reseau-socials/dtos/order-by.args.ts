import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args';

@InputType()
export class ReseauSocialOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ReseauSocialOrderByWithRelationInputStrict,
      Prisma.ReseauSocialOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  username: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  url: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  contactId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => ContactOrderByWithRelationInput, { nullable: true })
  contact: ContactOrderByWithRelationInput;
}

@InputType()
export class ReseauSocialOrderByWithRelationInput extends PartialType(
  ReseauSocialOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReseauSocialOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
