import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
import {
  EvaluationEtudiantsRelationFilter,
  EvaluationEtudiantsWhereInput,
} from 'src/models/evaluation-etudiants/dtos/where.args';

@InputType()
export class NoteEtudiantWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class NoteEtudiantWhereInputStrict
  implements
    RestrictProperties<
      NoteEtudiantWhereInputStrict,
      Prisma.NoteEtudiantWhereInput
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => FloatFilter, { nullable: true })
  note: FloatFilter;

  @Field(() => IntFilter, { nullable: true })
  evaluationEtudiantId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => EvaluationEtudiantsRelationFilter, { nullable: true })
  evaluationEtudiant: EvaluationEtudiantsRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [NoteEtudiantWhereInputStrict], { nullable: true })
  AND: NoteEtudiantWhereInputStrict[];

  @Field(() => [NoteEtudiantWhereInputStrict], { nullable: true })
  OR: NoteEtudiantWhereInputStrict[];

  @Field(() => [NoteEtudiantWhereInputStrict], { nullable: true })
  NOT: NoteEtudiantWhereInputStrict[];
}

@InputType()
export class NoteEtudiantWhereInput extends PartialType(
  NoteEtudiantWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => FloatFilter, { nullable: true })
  note: FloatFilter;

  @Field(() => IntFilter, { nullable: true })
  evaluationEtudiantId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => EvaluationEtudiantsRelationFilter, { nullable: true })
  evaluationEtudiant: EvaluationEtudiantsRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [NoteEtudiantWhereInput], { nullable: true })
  AND: NoteEtudiantWhereInput[];

  @Field(() => [NoteEtudiantWhereInput], { nullable: true })
  OR: NoteEtudiantWhereInput[];

  @Field(() => [NoteEtudiantWhereInput], { nullable: true })
  NOT: NoteEtudiantWhereInput[];
}

@InputType()
export class NoteEtudiantListRelationFilter {
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  every?: NoteEtudiantWhereInput;
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  some?: NoteEtudiantWhereInput;
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  none?: NoteEtudiantWhereInput;
}

@InputType()
export class NoteEtudiantRelationFilter {
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  is?: NoteEtudiantWhereInput;
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  isNot?: NoteEtudiantWhereInput;
}
