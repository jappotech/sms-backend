import { Prisma } from '@prisma/client';
import { UniteEnseignementOrderByWithRelationInput } from './order-by.args';
import { UniteEnseignementWhereInput, UniteEnseignementWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyUniteEnseignementArgsStrict implements RestrictProperties<FindManyUniteEnseignementArgsStrict, Omit<Prisma.UniteEnseignementFindManyArgs, 'include' | 'select'>> {
    where: UniteEnseignementWhereInput;
    orderBy: UniteEnseignementOrderByWithRelationInput[];
    cursor: UniteEnseignementWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.UniteEnseignementScalarFieldEnum[];
}
declare const FindManyUniteEnseignementArgs_base: import("@nestjs/common").Type<Partial<FindManyUniteEnseignementArgsStrict>>;
export declare class FindManyUniteEnseignementArgs extends FindManyUniteEnseignementArgs_base {
}
export declare class FindUniqueUniteEnseignementArgs {
    where: UniteEnseignementWhereUniqueInput;
}
export {};
