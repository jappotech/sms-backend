import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties, IntFilter, StringFilter, DateTimeFilter } from 'src/common/dtos/common.input'
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
export class EmploiDuTempsWhereInputStrict implements RestrictProperties<EmploiDuTempsWhereInputStrict, Prisma.EmploiDuTempsWhereInput> 
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  daysOfWeek: StringFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  startTime: DateTimeFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  endTime: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })   
  color: StringFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  startRecur: DateTimeFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  endRecur: DateTimeFilter;

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
  AND: EmploiDuTempsWhereInput[]

  @Field(() => [EmploiDuTempsWhereInputStrict], { nullable: true })
  OR: EmploiDuTempsWhereInput[]

  @Field(() => [EmploiDuTempsWhereInputStrict], { nullable: true })
  NOT: EmploiDuTempsWhereInput[]
}

@InputType()
export class EmploiDuTempsWhereInput extends PartialType(
  EmploiDuTempsWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  daysOfWeek: StringFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  startTime: DateTimeFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  endTime: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  color: StringFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  startRecur: DateTimeFilter;

  @Field(type => DateTimeFilter, { nullable: true })
  endRecur: DateTimeFilter;

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

