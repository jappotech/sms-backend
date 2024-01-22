import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args'

@InputType()
export class PaiementOrderByWithRelationInputStrict
  implements RestrictProperties<PaiementOrderByWithRelationInputStrict, Prisma.PaiementOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  etudiantId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  montant: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  datePaiement: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  methodePaiement: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  referencePaiement: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  typeFrais: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  statutPaiement: Prisma.SortOrder

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput
}


@InputType()
export class PaiementOrderByWithRelationInput extends PartialType(
  PaiementOrderByWithRelationInputStrict,
) { }

@InputType()
export class PaiementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
