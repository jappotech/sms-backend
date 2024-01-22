import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DomaineOrderByWithRelationInput } from 'src/models/domaines/dtos/order-by.args'
import { SpecialiteOrderByRelationAggregateInput } from 'src/models/specialites/dtos/order-by.args'

@InputType()
export class MentionOrderByWithRelationInputStrict
  implements RestrictProperties<MentionOrderByWithRelationInputStrict, Prisma.MentionOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  slug: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  domaineId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => DomaineOrderByWithRelationInput, { nullable: true })
  domaine: DomaineOrderByWithRelationInput

  @Field(() => SpecialiteOrderByRelationAggregateInput, { nullable: true })
  specialites: SpecialiteOrderByRelationAggregateInput
}


@InputType()
export class MentionOrderByWithRelationInput extends PartialType(
  MentionOrderByWithRelationInputStrict,
) { }

@InputType()
export class MentionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
