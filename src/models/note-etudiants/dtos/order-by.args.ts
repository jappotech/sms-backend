import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
import { EvaluationEtudiantsOrderByWithRelationInput } from 'src/models/evaluation-etudiants/dtos/order-by.args';

@InputType()
export class NoteEtudiantOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      NoteEtudiantOrderByWithRelationInputStrict,
      Prisma.NoteEtudiantOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  note: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  evaluationEtudiantId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  etudiantId: Prisma.SortOrder;

  @Field(() => EvaluationEtudiantsOrderByWithRelationInput, { nullable: true })
  evaluationEtudiant: EvaluationEtudiantsOrderByWithRelationInput;

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput;
}

@InputType()
export class NoteEtudiantOrderByWithRelationInput extends PartialType(
  NoteEtudiantOrderByWithRelationInputStrict,
) {}

@InputType()
export class NoteEtudiantOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
