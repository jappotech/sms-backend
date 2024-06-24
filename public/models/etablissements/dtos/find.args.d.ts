import { Prisma } from '@prisma/client';
import { EtablissementOrderByWithRelationInput } from './order-by.args';
import { EtablissementWhereInput, EtablissementWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyEtablissementArgsStrict implements RestrictProperties<FindManyEtablissementArgsStrict, Omit<Prisma.EtablissementFindManyArgs, 'include' | 'select'>> {
    where: EtablissementWhereInput;
    orderBy: EtablissementOrderByWithRelationInput[];
    cursor: EtablissementWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.EtablissementScalarFieldEnum[];
}
declare const FindManyEtablissementArgs_base: import("@nestjs/common").Type<Partial<FindManyEtablissementArgsStrict>>;
export declare class FindManyEtablissementArgs extends FindManyEtablissementArgs_base {
}
export declare class FindUniqueEtablissementArgs {
    where: EtablissementWhereUniqueInput;
}
export {};
