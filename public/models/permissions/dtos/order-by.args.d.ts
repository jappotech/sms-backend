import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class PermissionOrderByWithRelationInputStrict implements RestrictProperties<PermissionOrderByWithRelationInputStrict, Prisma.PermissionOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    role: Prisma.SortOrder;
    label: Prisma.SortOrder;
    slug: Prisma.SortOrder | Prisma.SortOrderInput;
    utilisateurs: UtilisateurOrderByRelationAggregateInput;
}
declare const PermissionOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<PermissionOrderByWithRelationInputStrict>>;
export declare class PermissionOrderByWithRelationInput extends PermissionOrderByWithRelationInput_base {
}
export declare class PermissionOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
