import { Prisma } from '@prisma/client';
import { CoursOrderByWithRelationInput } from './order-by.args';
import { CoursWhereInput, CoursWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyCoursArgsStrict implements RestrictProperties<FindManyCoursArgsStrict, Omit<Prisma.CoursFindManyArgs, 'include' | 'select'>> {
    where: CoursWhereInput;
    orderBy: CoursOrderByWithRelationInput[];
    cursor: CoursWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.CoursScalarFieldEnum[];
}
declare const FindManyCoursArgs_base: import("@nestjs/common").Type<Partial<FindManyCoursArgsStrict>>;
export declare class FindManyCoursArgs extends FindManyCoursArgs_base {
}
export declare class FindUniqueCoursArgs {
    where: CoursWhereUniqueInput;
}
export {};
