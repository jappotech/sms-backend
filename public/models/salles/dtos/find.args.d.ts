import { Prisma } from '@prisma/client';
import { SalleOrderByWithRelationInput } from './order-by.args';
import { SalleWhereInput, SalleWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManySalleArgsStrict implements RestrictProperties<FindManySalleArgsStrict, Omit<Prisma.SalleFindManyArgs, 'include' | 'select'>> {
    where: SalleWhereInput;
    orderBy: SalleOrderByWithRelationInput[];
    cursor: SalleWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.SalleScalarFieldEnum[];
}
declare const FindManySalleArgs_base: import("@nestjs/common").Type<Partial<FindManySalleArgsStrict>>;
export declare class FindManySalleArgs extends FindManySalleArgs_base {
}
export declare class FindUniqueSalleArgs {
    where: SalleWhereUniqueInput;
}
export {};
