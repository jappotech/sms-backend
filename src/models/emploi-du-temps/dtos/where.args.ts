import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  StringListFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { SalleRelationFilter } from 'src/models/salles/dtos/where.args';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';

@InputType()
export class EmploiDuTempsWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EmploiDuTempsWhereInputStrict implements RestrictProperties<EmploiDuTempsWhereInputStrict, Prisma.EmploiDuTempsWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title: StringFilter;

  @Field(() => StringListFilter)
  daysOfWeek: StringListFilter;

  @Field(type => StringFilter, { nullable: true })
  startTime: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  endTime: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  color: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  startRecur: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  endRecur: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  professeurId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  salleId: IntFilter;

  @Field(() => ProfesseurRelationFilter, { nullable: true })
  professeur: ProfesseurRelationFilter;

  @Field(() => SalleRelationFilter, { nullable: true })
  salle: SalleRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter;

  @Field(() => [EmploiDuTempsWhereInputStrict], { nullable: true })
  AND: EmploiDuTempsWhereInputStrict[]

  @Field(() => [EmploiDuTempsWhereInputStrict], { nullable: true })
  OR: EmploiDuTempsWhereInputStrict[]

  @Field(() => [EmploiDuTempsWhereInputStrict], { nullable: true })
  NOT: EmploiDuTempsWhereInputStrict[]
}

@InputType()
export class EmploiDuTempsWhereInput extends PartialType(
  EmploiDuTempsWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title: StringFilter;

  @Field(() => StringListFilter, { nullable: true })
  daysOfWeek: StringListFilter;

  @Field(type => StringFilter, { nullable: true })
  startTime: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  endTime: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  color: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  startRecur: StringFilter;

  @Field(type => StringFilter, { nullable: true })
  endRecur: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  professeurId: IntFilter;

  @Field(type => IntFilter, { nullable: true })
  salleId: IntFilter;

  @Field(() => ProfesseurRelationFilter, { nullable: true })
  professeur: ProfesseurRelationFilter;

  @Field(() => SalleRelationFilter, { nullable: true })
  salle: SalleRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter;

  @Field(() => [EmploiDuTempsWhereInput], { nullable: true })
  AND: EmploiDuTempsWhereInput[]

  @Field(() => [EmploiDuTempsWhereInput], { nullable: true })
  OR: EmploiDuTempsWhereInput[]

  @Field(() => [EmploiDuTempsWhereInput], { nullable: true })
  NOT: EmploiDuTempsWhereInput[]
}

@InputType()
export class EmploiDuTempsListRelationFilter {
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  every?: EmploiDuTempsWhereInput;
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  some?: EmploiDuTempsWhereInput;
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  none?: EmploiDuTempsWhereInput;
}


@InputType()
export class EmploiDuTempsRelationFilter {
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  is?: EmploiDuTempsWhereInput
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  isNot?: EmploiDuTempsWhereInput
}

