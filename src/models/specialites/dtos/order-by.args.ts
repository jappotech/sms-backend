import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args'
import { DiplomeOrderByRelationAggregateInput } from 'src/models/diplomes/dtos/order-by.args'
import { MentionOrderByWithRelationInput } from 'src/models/mentions/dtos/order-by.args'

@InputType()
export class SpecialiteOrderByWithRelationInputStrict
  implements RestrictProperties<SpecialiteOrderByWithRelationInputStrict, Prisma.SpecialiteOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  slug: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  mentionId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => MentionOrderByWithRelationInput)
  mention: MentionOrderByWithRelationInput

  @Field(() => ClasseOrderByRelationAggregateInput)
  Classe: ClasseOrderByRelationAggregateInput

  @Field(() => DiplomeOrderByRelationAggregateInput)
  Diplome: DiplomeOrderByRelationAggregateInput
}


@InputType()
export class SpecialiteOrderByWithRelationInput extends PartialType(
  SpecialiteOrderByWithRelationInputStrict,
) { }

@InputType()
export class SpecialiteOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
