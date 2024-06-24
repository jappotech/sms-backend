import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { MentionListRelationFilter } from 'src/models/mentions/dtos/where.args';
export declare class DomaineWhereUniqueInput {
    id: number;
}
export declare class DomaineWhereInputStrict implements RestrictProperties<DomaineWhereInputStrict, Prisma.DomaineWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    etablissements: EtablissementListRelationFilter;
    mentions: MentionListRelationFilter;
    AND: DomaineWhereInputStrict[];
    OR: DomaineWhereInputStrict[];
    NOT: DomaineWhereInputStrict[];
}
declare const DomaineWhereInput_base: import("@nestjs/common").Type<Partial<DomaineWhereInputStrict>>;
export declare class DomaineWhereInput extends DomaineWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    etablissements: EtablissementListRelationFilter;
    mentions: MentionListRelationFilter;
    AND: DomaineWhereInput[];
    OR: DomaineWhereInput[];
    NOT: DomaineWhereInput[];
}
export declare class DomaineListRelationFilter {
    every?: DomaineWhereInput;
    some?: DomaineWhereInput;
    none?: DomaineWhereInput;
}
export declare class DomaineRelationFilter {
    is?: DomaineWhereInput;
    isNot?: DomaineWhereInput;
}
export {};
