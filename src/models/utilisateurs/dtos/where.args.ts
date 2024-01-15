import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args';
import { AdresseListRelationFilter, AdresseRelationFilter } from 'src/models/adresses/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { PermissionListRelationFilter } from 'src/models/permissions/dtos/where.args';

@InputType()
export class UtilisateurWhereUniqueInput {
  id: number
}

@InputType()
export class UtilisateurWhereInputStrict implements RestrictProperties<UtilisateurWhereInputStrict, Prisma.UtilisateurWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => StringFilter, { nullable: true })
  matricule: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  prenom: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  dateNaissance: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  lieuNaissance: StringFilter

  @Field(() => StringFilter, { nullable: true })
  cni: StringFilter

  @Field(() => $Enums.Genre, { nullable: true })
  genre: Prisma.EnumGenreFilter;

  @Field(() => StringFilter, { nullable: true })
  nationalite: StringFilter

  @Field(() => $Enums.GroupeSanguin, { nullable: true })
  groupeSanguin: Prisma.EnumGroupeSanguinNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  statutCompte: StringFilter;

  @Field(() => $Enums.Role, { nullable: true })
  roles: Prisma.EnumRoleNullableListFilter;

  @Field(() => IntFilter, { nullable: true })
  contactId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  adresseId: IntFilter;

  @Field(() => ContactRelationFilter, { nullable: true })
  contact: ContactRelationFilter;

  @Field(() => AdresseRelationFilter, { nullable: true })
  adresse: AdresseRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => PermissionListRelationFilter, { nullable: true })
  permissions: PermissionListRelationFilter;

  @Field(() => ProfesseurRelationFilter, { nullable: true })
  Professeur: ProfesseurRelationFilter;

  @Field(() => EtablissementRelationFilter, { nullable: true })
  etablissement: EtablissementRelationFilter;

  @Field(() => [UtilisateurWhereInput], { nullable: true })
  AND: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[]

  @Field(() => [UtilisateurWhereInput], { nullable: true })
  OR: Prisma.UtilisateurWhereInput[]

  @Field(() => [UtilisateurWhereInput], { nullable: true })
  NOT: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[]

}

@InputType()
export class UtilisateurWhereInput extends PartialType(
  UtilisateurWhereInputStrict,
) { }

@InputType()
export class UtilisateurListRelationFilter {
  every?: UtilisateurWhereInput
  some?: UtilisateurWhereInput
  none?: UtilisateurWhereInput
}

@InputType()
export class UtilisateurRelationFilter {
  is?: UtilisateurWhereInput
  isNot?: UtilisateurWhereInput
}
