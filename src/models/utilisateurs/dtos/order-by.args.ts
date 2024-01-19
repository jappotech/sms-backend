import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AdresseOrderByWithRelationInput } from 'src/models/adresses/dtos/order-by.args'
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args'
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args'
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args'
import { PermissionOrderByRelationAggregateInput } from 'src/models/permissions/dtos/order-by.args'
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args'

@InputType()
export class UtilisateurOrderByWithRelationInputStrict
  implements RestrictProperties<UtilisateurOrderByWithRelationInputStrict, Prisma.UtilisateurOrderByWithRelationInput>
{

  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  matricule: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  prenom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  cni: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  genre: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  nationalite: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  etablissementId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  statutCompte: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  roles: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  contactId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => ContactOrderByWithRelationInput)
  contact: ContactOrderByWithRelationInput

  @Field(() => AdresseOrderByWithRelationInput, { nullable: true })
  adresse: AdresseOrderByWithRelationInput

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput

  @Field(() => PermissionOrderByRelationAggregateInput)
  permissions: PermissionOrderByRelationAggregateInput

  @Field(() => ProfesseurOrderByWithRelationInput)
  Professeur: ProfesseurOrderByWithRelationInput
}


@InputType()
export class UtilisateurOrderByWithRelationInput extends PartialType(
  UtilisateurOrderByWithRelationInputStrict,
) {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  matricule: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  prenom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  cni: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  genre: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  nationalite: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  etablissementId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  statutCompte: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  roles: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  contactId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => ContactOrderByWithRelationInput)
  contact: ContactOrderByWithRelationInput

  @Field(() => AdresseOrderByWithRelationInput, { nullable: true })
  adresse: AdresseOrderByWithRelationInput

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput

  @Field(() => PermissionOrderByRelationAggregateInput)
  permissions: PermissionOrderByRelationAggregateInput

  @Field(() => ProfesseurOrderByWithRelationInput)
  Professeur: ProfesseurOrderByWithRelationInput
}

@InputType()
export class UtilisateurOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
