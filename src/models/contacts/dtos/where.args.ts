import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { ReseauSocialListRelationFilter } from 'src/models/reseau-socials/dtos/where.args';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';

@InputType()
export class ContactWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class ContactWhereInputStrict
  implements
    RestrictProperties<ContactWhereInputStrict, Prisma.ContactWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  telephone: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  fix: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  fax: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  siteWeb: StringFilter;

  @Field(() => ReseauSocialListRelationFilter, { nullable: true })
  reseauxSociaux: ReseauSocialListRelationFilter;

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter;

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter;

  @Field(() => [ContactWhereInputStrict], { nullable: true })
  AND: ContactWhereInputStrict[];

  @Field(() => [ContactWhereInputStrict], { nullable: true })
  OR: ContactWhereInputStrict[];

  @Field(() => [ContactWhereInputStrict], { nullable: true })
  NOT: ContactWhereInputStrict[];
}

@InputType()
export class ContactWhereInput extends PartialType(ContactWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  telephone: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  fix: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  fax: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  siteWeb: StringFilter;

  @Field(() => ReseauSocialListRelationFilter, { nullable: true })
  reseauxSociaux: ReseauSocialListRelationFilter;

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter;

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter;

  @Field(() => [ContactWhereInput], { nullable: true })
  AND: ContactWhereInput[];

  @Field(() => [ContactWhereInput], { nullable: true })
  OR: ContactWhereInput[];

  @Field(() => [ContactWhereInput], { nullable: true })
  NOT: ContactWhereInput[];
}

@InputType()
export class ContactListRelationFilter {
  @Field(() => ContactWhereInput, { nullable: true })
  every?: ContactWhereInput;
  @Field(() => ContactWhereInput, { nullable: true })
  some?: ContactWhereInput;
  @Field(() => ContactWhereInput, { nullable: true })
  none?: ContactWhereInput;
}

@InputType()
export class ContactRelationFilter {
  @Field(() => ContactWhereInput, { nullable: true })
  is?: ContactWhereInput;
  @Field(() => ContactWhereInput, { nullable: true })
  isNot?: ContactWhereInput;
}
