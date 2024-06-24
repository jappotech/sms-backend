import { Prisma } from '@prisma/client';
import { ReseauSocialOrderByWithRelationInput } from './order-by.args';
import { ReseauSocialWhereInput, ReseauSocialWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyReseauSocialArgsStrict implements RestrictProperties<FindManyReseauSocialArgsStrict, Omit<Prisma.ReseauSocialFindManyArgs, 'include' | 'select'>> {
    where: ReseauSocialWhereInput;
    orderBy: ReseauSocialOrderByWithRelationInput[];
    cursor: ReseauSocialWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ReseauSocialScalarFieldEnum[];
}
declare const FindManyReseauSocialArgs_base: import("@nestjs/common").Type<Partial<FindManyReseauSocialArgsStrict>>;
export declare class FindManyReseauSocialArgs extends FindManyReseauSocialArgs_base {
}
export declare class FindUniqueReseauSocialArgs {
    where: ReseauSocialWhereUniqueInput;
}
export {};
