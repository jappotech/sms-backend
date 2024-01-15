import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UtilisateurOrderByWithRelationInputStrict
  implements RestrictProperties<UtilisateurOrderByWithRelationInputStrict, Prisma.UtilisateurOrderByWithRelationInput>
{
  id: Prisma.SortOrder
  matricule: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  prenom: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput
  lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput
  cni: Prisma.SortOrder | Prisma.SortOrderInput
  @Field(() => Prisma.SortOrder)
  genre: Prisma.SortOrder
  nationalite: Prisma.SortOrder | Prisma.SortOrderInput
  groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput
  etablissementId: Prisma.SortOrder | Prisma.SortOrderInput
  statutCompte: Prisma.SortOrder | Prisma.SortOrderInput
  @Field(() => Prisma.SortOrder)
  roles: Prisma.SortOrder
  contactId: Prisma.SortOrder | Prisma.SortOrderInput
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput
  contact: Prisma.ContactOrderByWithRelationInput
  adresse: Prisma.AdresseOrderByWithRelationInput
  etablissement: Prisma.EtablissementOrderByWithRelationInput
  etudiant: Prisma.EtudiantOrderByWithRelationInput
  permissions: Prisma.PermissionOrderByRelationAggregateInput
  Professeur: Prisma.ProfesseurOrderByWithRelationInput
}


@InputType()
export class UtilisateurOrderByWithRelationInput extends PartialType(
  UtilisateurOrderByWithRelationInputStrict,
) { }

@InputType()
export class UtilisateurOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
