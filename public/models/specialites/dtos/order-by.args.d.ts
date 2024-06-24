import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args';
import { DiplomeOrderByRelationAggregateInput } from 'src/models/diplomes/dtos/order-by.args';
import { MentionOrderByWithRelationInput } from 'src/models/mentions/dtos/order-by.args';
export declare class SpecialiteOrderByWithRelationInputStrict implements RestrictProperties<SpecialiteOrderByWithRelationInputStrict, Prisma.SpecialiteOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    slug: Prisma.SortOrder | Prisma.SortOrderInput;
    mentionId: Prisma.SortOrder | Prisma.SortOrderInput;
    mention: MentionOrderByWithRelationInput;
    Classe: ClasseOrderByRelationAggregateInput;
    Diplome: DiplomeOrderByRelationAggregateInput;
    etablissementId: Prisma.SortOrder | Prisma.SortOrderInput;
}
declare const SpecialiteOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<SpecialiteOrderByWithRelationInputStrict>>;
export declare class SpecialiteOrderByWithRelationInput extends SpecialiteOrderByWithRelationInput_base {
}
export declare class SpecialiteOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
