import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { DomaineOrderByWithRelationInput } from 'src/models/domaines/dtos/order-by.args';
import { SpecialiteOrderByRelationAggregateInput } from 'src/models/specialites/dtos/order-by.args';
export declare class MentionOrderByWithRelationInputStrict implements RestrictProperties<MentionOrderByWithRelationInputStrict, Prisma.MentionOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    slug: Prisma.SortOrder | Prisma.SortOrderInput;
    domaineId: Prisma.SortOrder | Prisma.SortOrderInput;
    domaine: DomaineOrderByWithRelationInput;
    specialites: SpecialiteOrderByRelationAggregateInput;
}
declare const MentionOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<MentionOrderByWithRelationInputStrict>>;
export declare class MentionOrderByWithRelationInput extends MentionOrderByWithRelationInput_base {
}
export declare class MentionOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
