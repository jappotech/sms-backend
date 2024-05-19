import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args';
import { MentionOrderByRelationAggregateInput } from 'src/models/mentions/dtos/order-by.args';

@InputType()
export class DomaineOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      DomaineOrderByWithRelationInputStrict,
      Prisma.DomaineOrderByWithRelationInput
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
  slug: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => EtablissementOrderByRelationAggregateInput, { nullable: true })
  etablissements: EtablissementOrderByRelationAggregateInput;

  @Field(() => MentionOrderByRelationAggregateInput, { nullable: true })
  mentions: MentionOrderByRelationAggregateInput;
}

@InputType()
export class DomaineOrderByWithRelationInput extends PartialType(
  DomaineOrderByWithRelationInputStrict,
) {}

@InputType()
export class DomaineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
