import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AdresseOrderByWithRelationInput } from 'src/models/adresses/dtos/order-by.args';
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args';
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
import { PermissionOrderByRelationAggregateInput } from 'src/models/permissions/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';

@InputType()
export class UtilisateurOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UtilisateurOrderByWithRelationInputStrict,
      Prisma.UtilisateurOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  matricule: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  prenom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  cni: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  genre: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nationalite: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  etablissementId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  statutCompte: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  roles: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  contactId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  accountId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => ContactOrderByWithRelationInput)
  contact: ContactOrderByWithRelationInput;

  @Field(() => AdresseOrderByWithRelationInput, { nullable: true })
  adresse: AdresseOrderByWithRelationInput;

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput;

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput;

  @Field(() => PermissionOrderByRelationAggregateInput)
  permissions: PermissionOrderByRelationAggregateInput;

  @Field(() => ProfesseurOrderByWithRelationInput)
  Professeur: ProfesseurOrderByWithRelationInput;
}

@InputType()
export class UtilisateurOrderByWithRelationInput extends PartialType(
  UtilisateurOrderByWithRelationInputStrict,
) {
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  matricule: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  prenom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  cni: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  genre: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nationalite: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  etablissementId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  statutCompte: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  roles: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  contactId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  adresseId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  accountId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => ContactOrderByWithRelationInput, { nullable: true })
  contact: ContactOrderByWithRelationInput;

  @Field(() => AdresseOrderByWithRelationInput, { nullable: true })
  adresse: AdresseOrderByWithRelationInput;

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput;

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput;

  @Field(() => PermissionOrderByRelationAggregateInput, { nullable: true })
  permissions: PermissionOrderByRelationAggregateInput;

  @Field(() => ProfesseurOrderByWithRelationInput, { nullable: true })
  Professeur: ProfesseurOrderByWithRelationInput;
}

@InputType()
export class UtilisateurOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder;
}
