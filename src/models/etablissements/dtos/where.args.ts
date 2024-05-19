import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { AdresseRelationFilter } from 'src/models/adresses/dtos/where.args';
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args';
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args';
import { DomaineListRelationFilter } from 'src/models/domaines/dtos/where.args';
import { SalleListRelationFilter } from 'src/models/salles/dtos/where.args';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';

@InputType()
export class EtablissementWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class EtablissementWhereInputStrict
  implements
    RestrictProperties<
      EtablissementWhereInputStrict,
      Prisma.EtablissementWhereInput
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  matricule: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  sigle: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  dateCreation: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  logo: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  anneeEnCours: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  adresseId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  contactId: IntFilter;

  @Field(() => AdresseRelationFilter, { nullable: true })
  adresse: AdresseRelationFilter;

  @Field(() => ContactRelationFilter, { nullable: true })
  contact: ContactRelationFilter;

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter;

  @Field(() => DomaineListRelationFilter, { nullable: true })
  domaines: DomaineListRelationFilter;

  @Field(() => ClasseListRelationFilter, { nullable: true })
  classes: ClasseListRelationFilter;

  @Field(() => SalleListRelationFilter, { nullable: true })
  salle: SalleListRelationFilter;

  @Field(() => [EtablissementWhereInputStrict], { nullable: true })
  AND: EtablissementWhereInputStrict[];

  @Field(() => [EtablissementWhereInputStrict], { nullable: true })
  OR: EtablissementWhereInputStrict[];

  @Field(() => [EtablissementWhereInputStrict], { nullable: true })
  NOT: EtablissementWhereInputStrict[];
}

@InputType()
export class EtablissementWhereInput extends PartialType(
  EtablissementWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  matricule: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  sigle: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  dateCreation: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  logo: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  anneeEnCours: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  adresseId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  contactId: IntFilter;

  @Field(() => AdresseRelationFilter, { nullable: true })
  adresse: AdresseRelationFilter;

  @Field(() => ContactRelationFilter, { nullable: true })
  contact: ContactRelationFilter;

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter;

  @Field(() => DomaineListRelationFilter, { nullable: true })
  domaines: DomaineListRelationFilter;

  @Field(() => ClasseListRelationFilter, { nullable: true })
  classes: ClasseListRelationFilter;

  @Field(() => SalleListRelationFilter, { nullable: true })
  salle: SalleListRelationFilter;

  @Field(() => [EtablissementWhereInput], { nullable: true })
  AND: EtablissementWhereInput[];

  @Field(() => [EtablissementWhereInput], { nullable: true })
  OR: EtablissementWhereInput[];

  @Field(() => [EtablissementWhereInput], { nullable: true })
  NOT: EtablissementWhereInput[];
}

@InputType()
export class EtablissementListRelationFilter {
  @Field(() => EtablissementWhereInput, { nullable: true })
  every?: EtablissementWhereInput;
  @Field(() => EtablissementWhereInput, { nullable: true })
  some?: EtablissementWhereInput;
  @Field(() => EtablissementWhereInput, { nullable: true })
  none?: EtablissementWhereInput;
}

@InputType()
export class EtablissementRelationFilter {
  @Field(() => EtablissementWhereInput, { nullable: true })
  is?: EtablissementWhereInput;
  @Field(() => EtablissementWhereInput, { nullable: true })
  isNot?: EtablissementWhereInput;
}
