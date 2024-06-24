import { Prisma } from '@prisma/client';
import { InscriptionOrderByWithRelationInput } from './order-by.args';
import { InscriptionWhereInput, InscriptionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyInscriptionArgsStrict implements RestrictProperties<FindManyInscriptionArgsStrict, Omit<Prisma.InscriptionFindManyArgs, 'include' | 'select'>> {
    where: InscriptionWhereInput;
    orderBy: InscriptionOrderByWithRelationInput[];
    cursor: InscriptionWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.InscriptionScalarFieldEnum[];
}
declare const FindManyInscriptionArgs_base: import("@nestjs/common").Type<Partial<FindManyInscriptionArgsStrict>>;
export declare class FindManyInscriptionArgs extends FindManyInscriptionArgs_base {
}
export declare class FindUniqueInscriptionArgs {
    where: InscriptionWhereUniqueInput;
}
export {};
