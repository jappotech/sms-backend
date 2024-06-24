import { Prisma } from '@prisma/client';
import { EmploiDuTempsOrderByWithRelationInput } from './order-by.args';
import { EmploiDuTempsWhereInput, EmploiDuTempsWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyEmploiDuTempsArgsStrict implements RestrictProperties<FindManyEmploiDuTempsArgsStrict, Omit<Prisma.EmploiDuTempsFindManyArgs, 'include' | 'select'>> {
    where: EmploiDuTempsWhereInput;
    orderBy: EmploiDuTempsOrderByWithRelationInput[];
    cursor: EmploiDuTempsWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.EmploiDuTempsScalarFieldEnum[];
}
declare const FindManyEmploiDuTempsArgs_base: import("@nestjs/common").Type<Partial<FindManyEmploiDuTempsArgsStrict>>;
export declare class FindManyEmploiDuTempsArgs extends FindManyEmploiDuTempsArgs_base {
}
export declare class FindUniqueEmploiDuTempsArgs {
    where: EmploiDuTempsWhereUniqueInput;
}
export {};
