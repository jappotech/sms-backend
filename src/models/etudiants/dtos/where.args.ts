import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { FeuillePresenceListRelationFilter } from 'src/models/feuille-presences/dtos/where.args';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { NoteEtudiantListRelationFilter } from 'src/models/note-etudiants/dtos/where.args';
import { PaiementListRelationFilter } from 'src/models/paiements/dtos/where.args';
import { UtilisateurRelationFilter } from 'src/models/utilisateurs/dtos/where.args';

@InputType()
export class EtudiantWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class EtudiantWhereInputStrict
  implements
    RestrictProperties<EtudiantWhereInputStrict, Prisma.EtudiantWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  slug: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  ine: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  baccaleaureat: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  anneeBaccaleaureat: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  profileId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  feuillePresencesId: IntFilter;

  @Field(() => UtilisateurRelationFilter, { nullable: true })
  profile: UtilisateurRelationFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => NoteEtudiantListRelationFilter, { nullable: true })
  notes: NoteEtudiantListRelationFilter;

  @Field(() => FeuillePresenceListRelationFilter, { nullable: true })
  feuillePresences: FeuillePresenceListRelationFilter;

  @Field(() => PaiementListRelationFilter, { nullable: true })
  Paiement: PaiementListRelationFilter;

  @Field(() => [EtudiantWhereInputStrict], { nullable: true })
  AND: EtudiantWhereInputStrict[];

  @Field(() => [EtudiantWhereInputStrict], { nullable: true })
  OR: EtudiantWhereInputStrict[];

  @Field(() => [EtudiantWhereInputStrict], { nullable: true })
  NOT: EtudiantWhereInputStrict[];
}

@InputType()
export class EtudiantWhereInput extends PartialType(EtudiantWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  slug: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  ine: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  baccaleaureat: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  anneeBaccaleaureat: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  profileId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  feuillePresencesId: IntFilter;

  @Field(() => UtilisateurRelationFilter, { nullable: true })
  profile: UtilisateurRelationFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => NoteEtudiantListRelationFilter, { nullable: true })
  notes: NoteEtudiantListRelationFilter;

  @Field(() => FeuillePresenceListRelationFilter, { nullable: true })
  feuillePresences: FeuillePresenceListRelationFilter;

  @Field(() => PaiementListRelationFilter, { nullable: true })
  Paiement: PaiementListRelationFilter;

  @Field(() => [EtudiantWhereInput], { nullable: true })
  AND: EtudiantWhereInput[];

  @Field(() => [EtudiantWhereInput], { nullable: true })
  OR: EtudiantWhereInput[];

  @Field(() => [EtudiantWhereInput], { nullable: true })
  NOT: EtudiantWhereInput[];
}

@InputType()
export class EtudiantListRelationFilter {
  @Field(() => EtudiantWhereInput, { nullable: true })
  every?: EtudiantWhereInput;
  @Field(() => EtudiantWhereInput, { nullable: true })
  some?: EtudiantWhereInput;
  @Field(() => EtudiantWhereInput, { nullable: true })
  none?: EtudiantWhereInput;
}

@InputType()
export class EtudiantRelationFilter {
  @Field(() => EtudiantWhereInput, { nullable: true })
  is?: EtudiantWhereInput;
  @Field(() => EtudiantWhereInput, { nullable: true })
  isNot?: EtudiantWhereInput;
}
