import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { SpecialiteRelationFilter } from 'src/models/specialites/dtos/where.args';

@InputType()
export class DiplomeWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class DiplomeWhereInputStrict
  implements
    RestrictProperties<DiplomeWhereInputStrict, Prisma.DiplomeWhereInput>
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
  finalite: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  entite: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  habilitation: StringFilter;

  @Field(() => StringListFilter, { nullable: true })
  partenaires: StringListFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateCreation: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateHabilitation: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateEcheance: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  duree: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  specialiteId: IntFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => SpecialiteRelationFilter, { nullable: true })
  specialite: SpecialiteRelationFilter;

  @Field(() => [DiplomeWhereInputStrict], { nullable: true })
  AND: DiplomeWhereInputStrict[];

  @Field(() => [DiplomeWhereInputStrict], { nullable: true })
  OR: DiplomeWhereInputStrict[];

  @Field(() => [DiplomeWhereInputStrict], { nullable: true })
  NOT: DiplomeWhereInputStrict[];
}

@InputType()
export class DiplomeWhereInput extends PartialType(DiplomeWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  finalite: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  entite: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  habilitation: StringFilter;

  @Field(() => StringListFilter, { nullable: true })
  partenaires: StringListFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateCreation: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateHabilitation: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateEcheance: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  duree: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  specialiteId: IntFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => SpecialiteRelationFilter, { nullable: true })
  specialite: SpecialiteRelationFilter;

  @Field(() => [DiplomeWhereInput], { nullable: true })
  AND: DiplomeWhereInput[];

  @Field(() => [DiplomeWhereInput], { nullable: true })
  OR: DiplomeWhereInput[];

  @Field(() => [DiplomeWhereInput], { nullable: true })
  NOT: DiplomeWhereInput[];
}

@InputType()
export class DiplomeListRelationFilter {
  @Field(() => DiplomeWhereInput, { nullable: true })
  every?: DiplomeWhereInput;
  @Field(() => DiplomeWhereInput, { nullable: true })
  some?: DiplomeWhereInput;
  @Field(() => DiplomeWhereInput, { nullable: true })
  none?: DiplomeWhereInput;
}

@InputType()
export class DiplomeRelationFilter {
  @Field(() => DiplomeWhereInput, { nullable: true })
  is?: DiplomeWhereInput;
  @Field(() => DiplomeWhereInput, { nullable: true })
  isNot?: DiplomeWhereInput;
}
