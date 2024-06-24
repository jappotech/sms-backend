import { Prisma } from '@prisma/client';
import { DomaineOrderByWithRelationInput } from './order-by.args';
import { DomaineWhereInput, DomaineWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyDomaineArgsStrict implements RestrictProperties<FindManyDomaineArgsStrict, Omit<Prisma.DomaineFindManyArgs, 'include' | 'select'>> {
    where: DomaineWhereInput;
    orderBy: DomaineOrderByWithRelationInput[];
    cursor: DomaineWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.DomaineScalarFieldEnum[];
}
declare const FindManyDomaineArgs_base: import("@nestjs/common").Type<Partial<FindManyDomaineArgsStrict>>;
export declare class FindManyDomaineArgs extends FindManyDomaineArgs_base {
}
export declare class FindUniqueDomaineArgs {
    where: DomaineWhereUniqueInput;
}
export {};
