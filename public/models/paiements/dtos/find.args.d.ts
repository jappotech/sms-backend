import { Prisma } from '@prisma/client';
import { PaiementOrderByWithRelationInput } from './order-by.args';
import { PaiementWhereInput, PaiementWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyPaiementArgsStrict implements RestrictProperties<FindManyPaiementArgsStrict, Omit<Prisma.PaiementFindManyArgs, 'include' | 'select'>> {
    where: PaiementWhereInput;
    orderBy: PaiementOrderByWithRelationInput[];
    cursor: PaiementWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.PaiementScalarFieldEnum[];
}
declare const FindManyPaiementArgs_base: import("@nestjs/common").Type<Partial<FindManyPaiementArgsStrict>>;
export declare class FindManyPaiementArgs extends FindManyPaiementArgs_base {
}
export declare class FindUniquePaiementArgs {
    where: PaiementWhereUniqueInput;
}
export {};
