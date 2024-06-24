import { Prisma } from '@prisma/client';
import { FeuillePresenceOrderByWithRelationInput } from './order-by.args';
import { FeuillePresenceWhereInput, FeuillePresenceWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyFeuillePresenceArgsStrict implements RestrictProperties<FindManyFeuillePresenceArgsStrict, Omit<Prisma.FeuillePresenceFindManyArgs, 'include' | 'select'>> {
    where: FeuillePresenceWhereInput;
    orderBy: FeuillePresenceOrderByWithRelationInput[];
    cursor: FeuillePresenceWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.FeuillePresenceScalarFieldEnum[];
}
declare const FindManyFeuillePresenceArgs_base: import("@nestjs/common").Type<Partial<FindManyFeuillePresenceArgsStrict>>;
export declare class FindManyFeuillePresenceArgs extends FindManyFeuillePresenceArgs_base {
}
export declare class FindUniqueFeuillePresenceArgs {
    where: FeuillePresenceWhereUniqueInput;
}
export {};
