import { Prisma } from '@prisma/client';
import { AdresseOrderByWithRelationInput } from './order-by.args';
import { AdresseWhereInput, AdresseWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyAdresseArgsStrict implements RestrictProperties<FindManyAdresseArgsStrict, Omit<Prisma.AdresseFindManyArgs, 'include' | 'select'>> {
    where: AdresseWhereInput;
    orderBy: AdresseOrderByWithRelationInput[];
    cursor: AdresseWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.AdresseScalarFieldEnum[];
}
declare const FindManyAdresseArgs_base: import("@nestjs/common").Type<Partial<FindManyAdresseArgsStrict>>;
export declare class FindManyAdresseArgs extends FindManyAdresseArgs_base {
}
export declare class FindUniqueAdresseArgs {
    where: AdresseWhereUniqueInput;
}
export {};
