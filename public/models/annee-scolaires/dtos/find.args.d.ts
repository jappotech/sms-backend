import { Prisma } from '@prisma/client';
import { AnneeScolaireOrderByWithRelationInput } from './order-by.args';
import { AnneeScolaireWhereInput, AnneeScolaireWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyAnneeScolaireArgsStrict implements RestrictProperties<FindManyAnneeScolaireArgsStrict, Omit<Prisma.AnneeScolaireFindManyArgs, 'include' | 'select'>> {
    where: AnneeScolaireWhereInput;
    orderBy: AnneeScolaireOrderByWithRelationInput[];
    cursor: AnneeScolaireWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.AnneeScolaireScalarFieldEnum[];
}
declare const FindManyAnneeScolaireArgs_base: import("@nestjs/common").Type<Partial<FindManyAnneeScolaireArgsStrict>>;
export declare class FindManyAnneeScolaireArgs extends FindManyAnneeScolaireArgs_base {
}
export declare class FindUniqueAnneeScolaireArgs {
    where: AnneeScolaireWhereUniqueInput;
}
export {};
