import { Prisma } from '@prisma/client';
import { SemestreOrderByWithRelationInput } from './order-by.args';
import { SemestreWhereInput, SemestreWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManySemestreArgsStrict implements RestrictProperties<FindManySemestreArgsStrict, Omit<Prisma.SemestreFindManyArgs, 'include' | 'select'>> {
    where: SemestreWhereInput;
    orderBy: SemestreOrderByWithRelationInput[];
    cursor: SemestreWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.SemestreScalarFieldEnum[];
}
declare const FindManySemestreArgs_base: import("@nestjs/common").Type<Partial<FindManySemestreArgsStrict>>;
export declare class FindManySemestreArgs extends FindManySemestreArgs_base {
}
export declare class FindUniqueSemestreArgs {
    where: SemestreWhereUniqueInput;
}
export {};
