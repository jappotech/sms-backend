import { Prisma } from '@prisma/client';
import { MatiereOrderByWithRelationInput } from './order-by.args';
import { MatiereWhereInput, MatiereWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyMatiereArgsStrict implements RestrictProperties<FindManyMatiereArgsStrict, Omit<Prisma.MatiereFindManyArgs, 'include' | 'select'>> {
    where: MatiereWhereInput;
    orderBy: MatiereOrderByWithRelationInput[];
    cursor: MatiereWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.MatiereScalarFieldEnum[];
}
declare const FindManyMatiereArgs_base: import("@nestjs/common").Type<Partial<FindManyMatiereArgsStrict>>;
export declare class FindManyMatiereArgs extends FindManyMatiereArgs_base {
}
export declare class FindUniqueMatiereArgs {
    where: MatiereWhereUniqueInput;
}
export {};
