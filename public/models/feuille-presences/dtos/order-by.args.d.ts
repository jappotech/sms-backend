import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
export declare class FeuillePresenceOrderByWithRelationInputStrict implements RestrictProperties<FeuillePresenceOrderByWithRelationInputStrict, Prisma.FeuillePresenceOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    date: Prisma.SortOrder;
    heureDebut: Prisma.SortOrder;
    heureFin: Prisma.SortOrder;
    coursId: Prisma.SortOrder;
    etudiantId: Prisma.SortOrder | Prisma.SortOrderInput;
    cours: CoursOrderByWithRelationInput;
    etudiant: EtudiantOrderByWithRelationInput;
}
declare const FeuillePresenceOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<FeuillePresenceOrderByWithRelationInputStrict>>;
export declare class FeuillePresenceOrderByWithRelationInput extends FeuillePresenceOrderByWithRelationInput_base {
}
export declare class FeuillePresenceOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
