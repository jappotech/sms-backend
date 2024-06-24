import { $Enums, EvaluationEtudiants as EvaluationEtudiantsType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class EvaluationEtudiants implements RestrictProperties<EvaluationEtudiants, EvaluationEtudiantsType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    dateEvaluation: Date;
    typeEvaluation: $Enums.TypeEvaluation;
    duree: number;
    document: string;
    description: string;
    coursId: number;
}
