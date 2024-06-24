import { Prisma } from '@prisma/client';
import { DiplomeOrderByWithRelationInput } from './order-by.args';
import { DiplomeWhereInput, DiplomeWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyDiplomeArgsStrict implements RestrictProperties<FindManyDiplomeArgsStrict, Omit<Prisma.DiplomeFindManyArgs, 'include' | 'select'>> {
    where: DiplomeWhereInput;
    orderBy: DiplomeOrderByWithRelationInput[];
    cursor: DiplomeWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.DiplomeScalarFieldEnum[];
}
declare const FindManyDiplomeArgs_base: import("@nestjs/common").Type<Partial<FindManyDiplomeArgsStrict>>;
export declare class FindManyDiplomeArgs extends FindManyDiplomeArgs_base {
}
export declare class FindUniqueDiplomeArgs {
    where: DiplomeWhereUniqueInput;
}
export {};
