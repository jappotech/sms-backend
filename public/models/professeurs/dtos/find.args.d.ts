import { Prisma } from '@prisma/client';
import { ProfesseurOrderByWithRelationInput } from './order-by.args';
import { ProfesseurWhereInput, ProfesseurWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyProfesseurArgsStrict implements RestrictProperties<FindManyProfesseurArgsStrict, Omit<Prisma.ProfesseurFindManyArgs, 'include' | 'select'>> {
    where: ProfesseurWhereInput;
    orderBy: ProfesseurOrderByWithRelationInput[];
    cursor: ProfesseurWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ProfesseurScalarFieldEnum[];
}
declare const FindManyProfesseurArgs_base: import("@nestjs/common").Type<Partial<FindManyProfesseurArgsStrict>>;
export declare class FindManyProfesseurArgs extends FindManyProfesseurArgs_base {
}
export declare class FindUniqueProfesseurArgs {
    where: ProfesseurWhereUniqueInput;
}
export {};
