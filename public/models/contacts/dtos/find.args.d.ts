import { Prisma } from '@prisma/client';
import { ContactOrderByWithRelationInput } from './order-by.args';
import { ContactWhereInput, ContactWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyContactArgsStrict implements RestrictProperties<FindManyContactArgsStrict, Omit<Prisma.ContactFindManyArgs, 'include' | 'select'>> {
    where: ContactWhereInput;
    orderBy: ContactOrderByWithRelationInput[];
    cursor: ContactWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ContactScalarFieldEnum[];
}
declare const FindManyContactArgs_base: import("@nestjs/common").Type<Partial<FindManyContactArgsStrict>>;
export declare class FindManyContactArgs extends FindManyContactArgs_base {
}
export declare class FindUniqueContactArgs {
    where: ContactWhereUniqueInput;
}
export {};
