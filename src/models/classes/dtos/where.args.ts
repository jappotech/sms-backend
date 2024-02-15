import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { AnneeScolaireRelationFilter } from 'src/models/annee-scolaires/dtos/where.args';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { SemestreListRelationFilter } from 'src/models/semestres/dtos/where.args';
import { SpecialiteRelationFilter } from 'src/models/specialites/dtos/where.args';

@InputType()
export class ClasseWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class ClasseWhereInputStrict
  implements
    RestrictProperties<ClasseWhereInputStrict, Prisma.ClasseWhereInput>
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
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  niveau: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  anneeScolaireId: IntFilter;

  @Field(() => AnneeScolaireRelationFilter, { nullable: true })
  AnneeScolaire: AnneeScolaireRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  specialiteId: IntFilter;

  @Field(() => EtablissementRelationFilter, { nullable: true })
  etablissement: EtablissementRelationFilter;

  @Field(() => SemestreListRelationFilter, { nullable: true })
  semestres: SemestreListRelationFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => SpecialiteRelationFilter, { nullable: true })
  specialite: SpecialiteRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  Cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [ClasseWhereInputStrict], { nullable: true })
  AND: ClasseWhereInputStrict[];

  @Field(() => [ClasseWhereInputStrict], { nullable: true })
  OR: ClasseWhereInputStrict[];

  @Field(() => [ClasseWhereInputStrict], { nullable: true })
  NOT: ClasseWhereInputStrict[];
}

@InputType()
export class ClasseWhereInput extends PartialType(ClasseWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  niveau: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  anneeScolaireId: IntFilter;

  @Field(() => AnneeScolaireRelationFilter, { nullable: true })
  AnneeScolaire: AnneeScolaireRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  specialiteId: IntFilter;

  @Field(() => EtablissementRelationFilter, { nullable: true })
  etablissement: EtablissementRelationFilter;

  @Field(() => SemestreListRelationFilter, { nullable: true })
  semestres: SemestreListRelationFilter;

  @Field(() => InscriptionListRelationFilter, { nullable: true })
  inscriptions: InscriptionListRelationFilter;

  @Field(() => SpecialiteRelationFilter, { nullable: true })
  specialite: SpecialiteRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  Cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [ClasseWhereInput], { nullable: true })
  AND: ClasseWhereInput[];

  @Field(() => [ClasseWhereInput], { nullable: true })
  OR: ClasseWhereInput[];

  @Field(() => [ClasseWhereInput], { nullable: true })
  NOT: ClasseWhereInput[];
}

@InputType()
export class ClasseListRelationFilter {
  @Field(() => ClasseWhereInput, { nullable: true })
  every?: ClasseWhereInput;
  @Field(() => ClasseWhereInput, { nullable: true })
  some?: ClasseWhereInput;
  @Field(() => ClasseWhereInput, { nullable: true })
  none?: ClasseWhereInput;
}

@InputType()
export class ClasseRelationFilter {
  @Field(() => ClasseWhereInput, { nullable: true })
  is?: ClasseWhereInput;
  @Field(() => ClasseWhereInput, { nullable: true })
  isNot?: ClasseWhereInput;
}
