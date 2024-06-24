import { Prisma } from '@prisma/client';
import { EtudiantOrderByWithRelationInput } from './order-by.args';
import { EtudiantWhereInput, EtudiantWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyEtudiantArgsStrict implements RestrictProperties<FindManyEtudiantArgsStrict, Omit<Prisma.EtudiantFindManyArgs, 'include' | 'select'>> {
    where: EtudiantWhereInput;
    orderBy: EtudiantOrderByWithRelationInput[];
    cursor: EtudiantWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.EtudiantScalarFieldEnum[];
}
declare const FindManyEtudiantArgs_base: import("@nestjs/common").Type<Partial<FindManyEtudiantArgsStrict>>;
export declare class FindManyEtudiantArgs extends FindManyEtudiantArgs_base {
}
export declare class FindUniqueEtudiantArgs {
    where: EtudiantWhereUniqueInput;
}
export {};
