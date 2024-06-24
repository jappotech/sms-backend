import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class AccountOrderByWithRelationInputStrict implements RestrictProperties<AccountOrderByWithRelationInputStrict, Prisma.AccountOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    uid: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    username: Prisma.SortOrder;
    password: Prisma.SortOrder;
    roles: Prisma.SortOrder;
    isActive: Prisma.SortOrder;
    userId: Prisma.SortOrder;
}
declare const AccountOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<AccountOrderByWithRelationInputStrict>>;
export declare class AccountOrderByWithRelationInput extends AccountOrderByWithRelationInput_base {
    id: Prisma.SortOrder;
    uid: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    username: Prisma.SortOrder;
    password: Prisma.SortOrder;
    roles: Prisma.SortOrder;
    isActive: Prisma.SortOrder;
    userId: Prisma.SortOrder;
}
export declare class AccountOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
