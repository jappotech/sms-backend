import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { DomaineRelationFilter } from 'src/models/domaines/dtos/where.args';
import { SpecialiteListRelationFilter } from 'src/models/specialites/dtos/where.args';
export declare class MentionWhereUniqueInput {
    id: number;
}
export declare class MentionWhereInputStrict implements RestrictProperties<MentionWhereInputStrict, Prisma.MentionWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    domaineId: IntFilter;
    domaine: DomaineRelationFilter;
    specialites: SpecialiteListRelationFilter;
    AND: MentionWhereInputStrict[];
    OR: MentionWhereInputStrict[];
    NOT: MentionWhereInputStrict[];
}
declare const MentionWhereInput_base: import("@nestjs/common").Type<Partial<MentionWhereInputStrict>>;
export declare class MentionWhereInput extends MentionWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    domaineId: IntFilter;
    domaine: DomaineRelationFilter;
    specialites: SpecialiteListRelationFilter;
    AND: MentionWhereInput[];
    OR: MentionWhereInput[];
    NOT: MentionWhereInput[];
}
export declare class MentionListRelationFilter {
    every?: MentionWhereInput;
    some?: MentionWhereInput;
    none?: MentionWhereInput;
}
export declare class MentionRelationFilter {
    is?: MentionWhereInput;
    isNot?: MentionWhereInput;
}
export {};
