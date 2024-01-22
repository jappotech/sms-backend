import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AdresseOrderByWithRelationInput } from 'src/models/adresses/dtos/order-by.args'
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args'
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args'
import { DomaineOrderByRelationAggregateInput } from 'src/models/domaines/dtos/order-by.args'
import { SalleOrderByRelationAggregateInput } from 'src/models/salles/dtos/order-by.args'
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args'

@InputType()
export class EtablissementOrderByWithRelationInputStrict
  implements RestrictProperties<EtablissementOrderByWithRelationInputStrict, Prisma.EtablissementOrderByWithRelationInput>
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
  matricule: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  sigle: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateCreation: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  logo: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  contactId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  adresse: AdresseOrderByWithRelationInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  contact: ContactOrderByWithRelationInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  utilisateurs: UtilisateurOrderByRelationAggregateInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  domaines: DomaineOrderByRelationAggregateInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  classes: ClasseOrderByRelationAggregateInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  salle: SalleOrderByRelationAggregateInput
}


@InputType()
export class EtablissementOrderByWithRelationInput extends PartialType(
  EtablissementOrderByWithRelationInputStrict,
) { }

@InputType()
export class EtablissementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
