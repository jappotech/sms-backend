import { Prisma } from '@prisma/client';
import { SpecialiteOrderByWithRelationInput } from './order-by.args';
import { SpecialiteWhereInput, SpecialiteWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManySpecialiteArgsStrict implements RestrictProperties<FindManySpecialiteArgsStrict, Omit<Prisma.SpecialiteFindManyArgs, 'include' | 'select'>> {
    where: SpecialiteWhereInput;
    orderBy: SpecialiteOrderByWithRelationInput[];
    cursor: SpecialiteWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.SpecialiteScalarFieldEnum[];
}
declare const FindManySpecialiteArgs_base: import("@nestjs/common").Type<Partial<FindManySpecialiteArgsStrict>>;
export declare class FindManySpecialiteArgs extends FindManySpecialiteArgs_base {
}
export declare class FindUniqueSpecialiteArgs {
    where: SpecialiteWhereUniqueInput;
}
export {};
