import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { NoteEtudiantOrderByRelationAggregateInput } from 'src/models/note-etudiants/dtos/order-by.args';
export declare class EvaluationEtudiantsOrderByWithRelationInputStrict implements RestrictProperties<EvaluationEtudiantsOrderByWithRelationInputStrict, Prisma.EvaluationEtudiantsOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    dateEvaluation: Prisma.SortOrder;
    typeEvaluation: Prisma.SortOrder;
    duree: Prisma.SortOrder;
    document: Prisma.SortOrder;
    description: Prisma.SortOrder | Prisma.SortOrderInput;
    coursId: Prisma.SortOrder;
    cours: CoursOrderByWithRelationInput;
    NoteEtudiant: NoteEtudiantOrderByRelationAggregateInput;
}
declare const EvaluationEtudiantsOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<EvaluationEtudiantsOrderByWithRelationInputStrict>>;
export declare class EvaluationEtudiantsOrderByWithRelationInput extends EvaluationEtudiantsOrderByWithRelationInput_base {
}
export declare class EvaluationEtudiantsOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
