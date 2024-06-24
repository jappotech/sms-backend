import { Prisma } from '@prisma/client';
import { MentionOrderByWithRelationInput } from './order-by.args';
import { MentionWhereInput, MentionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyMentionArgsStrict implements RestrictProperties<FindManyMentionArgsStrict, Omit<Prisma.MentionFindManyArgs, 'include' | 'select'>> {
    where: MentionWhereInput;
    orderBy: MentionOrderByWithRelationInput[];
    cursor: MentionWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.MentionScalarFieldEnum[];
}
declare const FindManyMentionArgs_base: import("@nestjs/common").Type<Partial<FindManyMentionArgsStrict>>;
export declare class FindManyMentionArgs extends FindManyMentionArgs_base {
}
export declare class FindUniqueMentionArgs {
    where: MentionWhereUniqueInput;
}
export {};
