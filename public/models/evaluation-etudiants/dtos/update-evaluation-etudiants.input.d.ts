import { CreateEvaluationEtudiantsInput } from './create-evaluation-etudiants.input';
import { EvaluationEtudiants } from '@prisma/client';
declare const UpdateEvaluationEtudiantsInput_base: import("@nestjs/common").Type<Partial<CreateEvaluationEtudiantsInput>>;
export declare class UpdateEvaluationEtudiantsInput extends UpdateEvaluationEtudiantsInput_base {
    id: EvaluationEtudiants['id'];
}
export {};
