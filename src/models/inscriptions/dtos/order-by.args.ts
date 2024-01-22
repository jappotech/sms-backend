import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args'
import { DiplomeOrderByWithRelationInput } from 'src/models/diplomes/dtos/order-by.args'
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args'

@InputType()
export class InscriptionOrderByWithRelationInputStrict
  implements RestrictProperties<InscriptionOrderByWithRelationInputStrict, Prisma.InscriptionOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  reference: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  premiereInscription: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  dernierDiplome: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  autreEtablissement: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  activiteProfessionnel: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  niveau: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  statut: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  diplomeId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  etudiantId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  classeId: Prisma.SortOrder

  @Field(() => DiplomeOrderByWithRelationInput, { nullable: true })
  diplome: DiplomeOrderByWithRelationInput

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput

  @Field(() => ClasseOrderByWithRelationInput, { nullable: true })
  classe: ClasseOrderByWithRelationInput
}


@InputType()
export class InscriptionOrderByWithRelationInput extends PartialType(
  InscriptionOrderByWithRelationInputStrict,
) { }

@InputType()
export class InscriptionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
