import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
import { EvaluationEtudiantsOrderByWithRelationInput } from 'src/models/evaluation-etudiants/dtos/order-by.args';
export declare class NoteEtudiantOrderByWithRelationInputStrict implements RestrictProperties<NoteEtudiantOrderByWithRelationInputStrict, Prisma.NoteEtudiantOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    note: Prisma.SortOrder;
    evaluationEtudiantId: Prisma.SortOrder | Prisma.SortOrderInput;
    etudiantId: Prisma.SortOrder;
    evaluationEtudiant: EvaluationEtudiantsOrderByWithRelationInput;
    etudiant: EtudiantOrderByWithRelationInput;
}
declare const NoteEtudiantOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<NoteEtudiantOrderByWithRelationInputStrict>>;
export declare class NoteEtudiantOrderByWithRelationInput extends NoteEtudiantOrderByWithRelationInput_base {
}
export declare class NoteEtudiantOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
