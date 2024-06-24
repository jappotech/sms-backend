import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args';
import { MentionOrderByRelationAggregateInput } from 'src/models/mentions/dtos/order-by.args';
export declare class DomaineOrderByWithRelationInputStrict implements RestrictProperties<DomaineOrderByWithRelationInputStrict, Prisma.DomaineOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    slug: Prisma.SortOrder | Prisma.SortOrderInput;
    etablissements: EtablissementOrderByRelationAggregateInput;
    mentions: MentionOrderByRelationAggregateInput;
}
declare const DomaineOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<DomaineOrderByWithRelationInputStrict>>;
export declare class DomaineOrderByWithRelationInput extends DomaineOrderByWithRelationInput_base {
}
export declare class DomaineOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
