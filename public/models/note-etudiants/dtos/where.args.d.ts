import { Prisma } from '@prisma/client';
import { DateTimeFilter, FloatFilter, IntFilter, RestrictProperties } from 'src/common/dtos/common.input';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
import { EvaluationEtudiantsRelationFilter } from 'src/models/evaluation-etudiants/dtos/where.args';
export declare class NoteEtudiantWhereUniqueInput {
    id: number;
}
export declare class NoteEtudiantWhereInputStrict implements RestrictProperties<NoteEtudiantWhereInputStrict, Prisma.NoteEtudiantWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    note: FloatFilter;
    evaluationEtudiantId: IntFilter;
    etudiantId: IntFilter;
    evaluationEtudiant: EvaluationEtudiantsRelationFilter;
    etudiant: EtudiantRelationFilter;
    AND: NoteEtudiantWhereInputStrict[];
    OR: NoteEtudiantWhereInputStrict[];
    NOT: NoteEtudiantWhereInputStrict[];
}
declare const NoteEtudiantWhereInput_base: import("@nestjs/common").Type<Partial<NoteEtudiantWhereInputStrict>>;
export declare class NoteEtudiantWhereInput extends NoteEtudiantWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    note: FloatFilter;
    evaluationEtudiantId: IntFilter;
    etudiantId: IntFilter;
    evaluationEtudiant: EvaluationEtudiantsRelationFilter;
    etudiant: EtudiantRelationFilter;
    AND: NoteEtudiantWhereInput[];
    OR: NoteEtudiantWhereInput[];
    NOT: NoteEtudiantWhereInput[];
}
export declare class NoteEtudiantListRelationFilter {
    every?: NoteEtudiantWhereInput;
    some?: NoteEtudiantWhereInput;
    none?: NoteEtudiantWhereInput;
}
export declare class NoteEtudiantRelationFilter {
    is?: NoteEtudiantWhereInput;
    isNot?: NoteEtudiantWhereInput;
}
export {};
