import { CreateEvaluationEtudiantsInput } from './create-evaluation-etudiants.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { EvaluationEtudiants } from '@prisma/client';

@InputType()
export class UpdateEvaluationEtudiantsInput extends PartialType(
  CreateEvaluationEtudiantsInput,
) {
  id: EvaluationEtudiants['id'];
}
