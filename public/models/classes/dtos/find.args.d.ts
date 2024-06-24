import { Prisma } from '@prisma/client';
import { ClasseOrderByWithRelationInput } from './order-by.args';
import { ClasseWhereInput, ClasseWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyClasseArgsStrict implements RestrictProperties<FindManyClasseArgsStrict, Omit<Prisma.ClasseFindManyArgs, 'include' | 'select'>> {
    where: ClasseWhereInput;
    orderBy: ClasseOrderByWithRelationInput[];
    cursor: ClasseWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ClasseScalarFieldEnum[];
}
declare const FindManyClasseArgs_base: import("@nestjs/common").Type<Partial<FindManyClasseArgsStrict>>;
export declare class FindManyClasseArgs extends FindManyClasseArgs_base {
}
export declare class FindUniqueClasseArgs {
    where: ClasseWhereUniqueInput;
}
export {};
