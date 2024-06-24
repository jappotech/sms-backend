import { Prisma } from '@prisma/client';
import { PermissionOrderByWithRelationInput } from './order-by.args';
import { PermissionWhereInput, PermissionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyPermissionArgsStrict implements RestrictProperties<FindManyPermissionArgsStrict, Omit<Prisma.PermissionFindManyArgs, 'include' | 'select'>> {
    where: PermissionWhereInput;
    orderBy: PermissionOrderByWithRelationInput[];
    cursor: PermissionWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.PermissionScalarFieldEnum[];
}
declare const FindManyPermissionArgs_base: import("@nestjs/common").Type<Partial<FindManyPermissionArgsStrict>>;
export declare class FindManyPermissionArgs extends FindManyPermissionArgs_base {
}
export declare class FindUniquePermissionArgs {
    where: PermissionWhereUniqueInput;
}
export {};
