import { Prisma } from '@prisma/client';
import { AccountOrderByWithRelationInput } from './order-by.args';
import { AccountWhereInput, AccountWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyAccountArgsStrict implements RestrictProperties<FindManyAccountArgsStrict, Omit<Prisma.AccountFindManyArgs, 'include' | 'select'>> {
    where: AccountWhereInput;
    orderBy: AccountOrderByWithRelationInput[];
    cursor: AccountWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.AccountScalarFieldEnum[];
}
declare const FindManyAccountArgs_base: import("@nestjs/common").Type<Partial<FindManyAccountArgsStrict>>;
export declare class FindManyAccountArgs extends FindManyAccountArgs_base {
}
export declare class FindUniqueAccountArgs {
    where: AccountWhereUniqueInput;
}
export {};
