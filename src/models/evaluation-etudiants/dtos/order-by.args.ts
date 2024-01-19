import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args'
import { NoteEtudiantOrderByRelationAggregateInput } from 'src/models/note-etudiants/dtos/order-by.args'

@InputType()
export class EvaluationEtudiantsOrderByWithRelationInputStrict
  implements RestrictProperties<EvaluationEtudiantsOrderByWithRelationInputStrict, Prisma.EvaluationEtudiantsOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  typeEvaluation: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  duree: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  document: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  description: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  coursId: Prisma.SortOrder

  @Field(() => CoursOrderByWithRelationInput, { nullable: true })
  cours: CoursOrderByWithRelationInput

  @Field(() => NoteEtudiantOrderByRelationAggregateInput, { nullable: true })
  NoteEtudiant: NoteEtudiantOrderByRelationAggregateInput
}


@InputType()
export class EvaluationEtudiantsOrderByWithRelationInput extends PartialType(
  EvaluationEtudiantsOrderByWithRelationInputStrict,
) { }

@InputType()
export class EvaluationEtudiantsOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
