import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class AccountWhereUniqueInput {
    id: number;
}
export declare class AccountWhereInputStrict implements RestrictProperties<AccountWhereInputStrict, Prisma.AccountWhereInput> {
    id: number;
    uid: string;
    createdAt: Date;
    updatedAt: string;
    username: string;
    password: string;
    roles: Prisma.EnumRoleNullableListFilter;
    isActive: boolean;
    userId: number;
    AND: AccountWhereInputStrict[];
    OR: AccountWhereInputStrict[];
    NOT: AccountWhereInputStrict[];
}
declare const AccountWhereInput_base: import("@nestjs/common").Type<Partial<AccountWhereInputStrict>>;
export declare class AccountWhereInput extends AccountWhereInput_base {
    id: number;
    uid: string;
    createdAt: Date;
    updatedAt: string;
    username: string;
    password: string;
    roles: Prisma.EnumRoleNullableListFilter;
    isActive: boolean;
    userId: number;
    AND: AccountWhereInput[];
    OR: AccountWhereInput[];
    NOT: AccountWhereInput[];
}
export declare class AccountListRelationFilter {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
}
export declare class AccountRelationFilter {
    is?: AccountWhereInput;
    isNot?: AccountWhereInput;
}
export {};
