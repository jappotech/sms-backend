import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args'
import { SpecialiteOrderByWithRelationInput } from 'src/models/specialites/dtos/order-by.args'

@InputType()
export class DiplomeOrderByWithRelationInputStrict
  implements RestrictProperties<DiplomeOrderByWithRelationInputStrict, Prisma.DiplomeOrderByWithRelationInput>
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
  finalite: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  entite: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  habilitation: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  partenaires: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateCreation: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateHabilitation: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateEcheance: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  duree: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  specialiteId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => InscriptionOrderByRelationAggregateInput, { nullable: true })
  inscriptions: InscriptionOrderByRelationAggregateInput

  @Field(() => SpecialiteOrderByWithRelationInput, { nullable: true })
  specialite: SpecialiteOrderByWithRelationInput
}


@InputType()
export class DiplomeOrderByWithRelationInput extends PartialType(
  DiplomeOrderByWithRelationInputStrict,
) { }

@InputType()
export class DiplomeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
