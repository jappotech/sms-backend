import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args';
import { DiplomeListRelationFilter } from 'src/models/diplomes/dtos/where.args';
import { MentionRelationFilter } from 'src/models/mentions/dtos/where.args';
export declare class SpecialiteWhereUniqueInput {
    id: number;
}
export declare class SpecialiteWhereInputStrict implements RestrictProperties<SpecialiteWhereInputStrict, Prisma.SpecialiteWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    mentionId: IntFilter;
    mention: MentionRelationFilter;
    Classe: ClasseListRelationFilter;
    Diplome: DiplomeListRelationFilter;
    etablissementId: IntFilter;
    AND: SpecialiteWhereInput[];
    OR: SpecialiteWhereInput[];
    NOT: SpecialiteWhereInput[];
}
declare const SpecialiteWhereInput_base: import("@nestjs/common").Type<Partial<SpecialiteWhereInputStrict>>;
export declare class SpecialiteWhereInput extends SpecialiteWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    slug: StringFilter;
    mentionId: IntFilter;
    mention: MentionRelationFilter;
    Classe: ClasseListRelationFilter;
    Diplome: DiplomeListRelationFilter;
    etablissementId: IntFilter;
    AND: SpecialiteWhereInput[];
    OR: SpecialiteWhereInput[];
    NOT: SpecialiteWhereInput[];
}
export declare class SpecialiteListRelationFilter {
    every?: SpecialiteWhereInput;
    some?: SpecialiteWhereInput;
    none?: SpecialiteWhereInput;
}
export declare class SpecialiteRelationFilter {
    is?: SpecialiteWhereInput;
    isNot?: SpecialiteWhereInput;
}
export {};
