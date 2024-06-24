import { Prisma } from '@prisma/client';
import { UtilisateurOrderByWithRelationInput } from './order-by.args';
import { UtilisateurWhereInput, UtilisateurWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyUtilisateurArgsStrict implements RestrictProperties<FindManyUtilisateurArgsStrict, Omit<Prisma.UtilisateurFindManyArgs, 'include' | 'select'>> {
    where: UtilisateurWhereInput;
    orderBy: UtilisateurOrderByWithRelationInput[];
    cursor: UtilisateurWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.UtilisateurScalarFieldEnum[];
}
declare const FindManyUtilisateurArgs_base: import("@nestjs/common").Type<Partial<FindManyUtilisateurArgsStrict>>;
export declare class FindManyUtilisateurArgs extends FindManyUtilisateurArgs_base {
}
export declare class FindUniqueUtilisateurArgs {
    where: UtilisateurWhereUniqueInput;
}
export {};
