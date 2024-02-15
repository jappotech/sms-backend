import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';

@InputType()
export class SalleWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class SalleWhereInputStrict
  implements RestrictProperties<SalleWhereInputStrict, Prisma.SalleWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  capacite: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  batiment: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  estDisponible: BoolFilter;

  @Field(() => EtablissementRelationFilter, { nullable: true })
  etablissement: EtablissementRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [SalleWhereInputStrict], { nullable: true })
  AND: SalleWhereInput[];

  @Field(() => [SalleWhereInputStrict], { nullable: true })
  OR: SalleWhereInput[];

  @Field(() => [SalleWhereInputStrict], { nullable: true })
  NOT: SalleWhereInput[];
}

@InputType()
export class SalleWhereInput extends PartialType(SalleWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  capacite: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  batiment: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  estDisponible: BoolFilter;

  @Field(() => EtablissementRelationFilter, { nullable: true })
  etablissement: EtablissementRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [SalleWhereInput], { nullable: true })
  AND: SalleWhereInput[];

  @Field(() => [SalleWhereInput], { nullable: true })
  OR: SalleWhereInput[];

  @Field(() => [SalleWhereInput], { nullable: true })
  NOT: SalleWhereInput[];
}

@InputType()
export class SalleListRelationFilter {
  @Field(() => SalleWhereInput, { nullable: true })
  every?: SalleWhereInput;
  @Field(() => SalleWhereInput, { nullable: true })
  some?: SalleWhereInput;
  @Field(() => SalleWhereInput, { nullable: true })
  none?: SalleWhereInput;
}

@InputType()
export class SalleRelationFilter {
  @Field(() => SalleWhereInput, { nullable: true })
  is?: SalleWhereInput;
  @Field(() => SalleWhereInput, { nullable: true })
  isNot?: SalleWhereInput;
}
