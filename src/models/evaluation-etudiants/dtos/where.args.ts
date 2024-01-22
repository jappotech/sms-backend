import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args'
import { NoteEtudiantListRelationFilter } from 'src/models/note-etudiants/dtos/where.args'

@InputType()
export class EvaluationEtudiantsWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EvaluationEtudiantsWhereInputStrict implements RestrictProperties<EvaluationEtudiantsWhereInputStrict, Prisma.EvaluationEtudiantsWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  typeEvaluation: $Enums.TypeEvaluation

  @Field(() => IntFilter, { nullable: true })
  duree: IntFilter

  @Field(() => StringFilter, { nullable: true })
  document: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description: StringFilter

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter

  @Field(() => NoteEtudiantListRelationFilter, { nullable: true })
  NoteEtudiant: NoteEtudiantListRelationFilter

  @Field(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true })
  AND: EvaluationEtudiantsWhereInputStrict[]

  @Field(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true })
  OR: EvaluationEtudiantsWhereInputStrict[]

  @Field(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true })
  NOT: EvaluationEtudiantsWhereInputStrict[]
}

@InputType()
export class EvaluationEtudiantsWhereInput extends PartialType(
  EvaluationEtudiantsWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  typeEvaluation: $Enums.TypeEvaluation

  @Field(() => IntFilter, { nullable: true })
  duree: IntFilter

  @Field(() => StringFilter, { nullable: true })
  document: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description: StringFilter

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter

  @Field(() => NoteEtudiantListRelationFilter, { nullable: true })
  NoteEtudiant: NoteEtudiantListRelationFilter

  @Field(() => [EvaluationEtudiantsWhereInput], { nullable: true })
  AND: EvaluationEtudiantsWhereInput[]

  @Field(() => [EvaluationEtudiantsWhereInput], { nullable: true })
  OR: EvaluationEtudiantsWhereInput[]

  @Field(() => [EvaluationEtudiantsWhereInput], { nullable: true })
  NOT: EvaluationEtudiantsWhereInput[]
}

@InputType()
export class EvaluationEtudiantsListRelationFilter {
  @Field(() => EvaluationEtudiantsWhereInput, { nullable: true })
  every?: EvaluationEtudiantsWhereInput
  @Field(() => EvaluationEtudiantsWhereInput, { nullable: true })
  some?: EvaluationEtudiantsWhereInput
  @Field(() => EvaluationEtudiantsWhereInput, { nullable: true })
  none?: EvaluationEtudiantsWhereInput
}

@InputType()
export class EvaluationEtudiantsRelationFilter {
  @Field(() => EvaluationEtudiantsWhereInput, { nullable: true })
  is?: EvaluationEtudiantsWhereInput
  @Field(() => EvaluationEtudiantsWhereInput, { nullable: true })
  isNot?: EvaluationEtudiantsWhereInput
}
