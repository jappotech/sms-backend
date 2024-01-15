import { InputType, PickType } from '@nestjs/graphql'
import { EvaluationEtudiants } from '../entity/evaluation-etudiants.entity'

@InputType()
export class CreateEvaluationEtudiantsInput extends PickType(EvaluationEtudiants,[],InputType) {}

