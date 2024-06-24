import { $Enums, Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';
import { NoteEtudiantListRelationFilter } from 'src/models/note-etudiants/dtos/where.args';
export declare class EvaluationEtudiantsWhereUniqueInput {
    id: number;
}
export declare class EvaluationEtudiantsWhereInputStrict implements RestrictProperties<EvaluationEtudiantsWhereInputStrict, Prisma.EvaluationEtudiantsWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    dateEvaluation: DateTimeFilter;
    typeEvaluation: $Enums.TypeEvaluation;
    duree: IntFilter;
    document: StringFilter;
    description: StringFilter;
    coursId: IntFilter;
    cours: CoursRelationFilter;
    NoteEtudiant: NoteEtudiantListRelationFilter;
    AND: EvaluationEtudiantsWhereInputStrict[];
    OR: EvaluationEtudiantsWhereInputStrict[];
    NOT: EvaluationEtudiantsWhereInputStrict[];
}
declare const EvaluationEtudiantsWhereInput_base: import("@nestjs/common").Type<Partial<EvaluationEtudiantsWhereInputStrict>>;
export declare class EvaluationEtudiantsWhereInput extends EvaluationEtudiantsWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    dateEvaluation: DateTimeFilter;
    typeEvaluation: $Enums.TypeEvaluation;
    duree: IntFilter;
    document: StringFilter;
    description: StringFilter;
    coursId: IntFilter;
    cours: CoursRelationFilter;
    NoteEtudiant: NoteEtudiantListRelationFilter;
    AND: EvaluationEtudiantsWhereInput[];
    OR: EvaluationEtudiantsWhereInput[];
    NOT: EvaluationEtudiantsWhereInput[];
}
export declare class EvaluationEtudiantsListRelationFilter {
    every?: EvaluationEtudiantsWhereInput;
    some?: EvaluationEtudiantsWhereInput;
    none?: EvaluationEtudiantsWhereInput;
}
export declare class EvaluationEtudiantsRelationFilter {
    is?: EvaluationEtudiantsWhereInput;
    isNot?: EvaluationEtudiantsWhereInput;
}
export {};
