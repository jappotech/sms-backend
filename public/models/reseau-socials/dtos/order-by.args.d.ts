import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args';
export declare class ReseauSocialOrderByWithRelationInputStrict implements RestrictProperties<ReseauSocialOrderByWithRelationInputStrict, Prisma.ReseauSocialOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    username: Prisma.SortOrder;
    url: Prisma.SortOrder;
    contactId: Prisma.SortOrder | Prisma.SortOrderInput;
    contact: ContactOrderByWithRelationInput;
}
declare const ReseauSocialOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ReseauSocialOrderByWithRelationInputStrict>>;
export declare class ReseauSocialOrderByWithRelationInput extends ReseauSocialOrderByWithRelationInput_base {
}
export declare class ReseauSocialOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
