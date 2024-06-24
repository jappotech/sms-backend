import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args';
export declare class ReseauSocialWhereUniqueInput {
    id: number;
}
export declare class ReseauSocialWhereInputStrict implements RestrictProperties<ReseauSocialWhereInputStrict, Prisma.ReseauSocialWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    username: StringFilter;
    url: StringFilter;
    contactId: IntFilter;
    contact: ContactRelationFilter;
    AND: ReseauSocialWhereInputStrict[];
    OR: ReseauSocialWhereInputStrict[];
    NOT: ReseauSocialWhereInputStrict[];
}
declare const ReseauSocialWhereInput_base: import("@nestjs/common").Type<Partial<ReseauSocialWhereInputStrict>>;
export declare class ReseauSocialWhereInput extends ReseauSocialWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    username: StringFilter;
    url: StringFilter;
    contactId: IntFilter;
    contact: ContactRelationFilter;
    AND: ReseauSocialWhereInput[];
    OR: ReseauSocialWhereInput[];
    NOT: ReseauSocialWhereInput[];
}
export declare class ReseauSocialListRelationFilter {
    every?: ReseauSocialWhereInput;
    some?: ReseauSocialWhereInput;
    none?: ReseauSocialWhereInput;
}
export declare class ReseauSocialRelationFilter {
    is?: ReseauSocialWhereInput;
    isNot?: ReseauSocialWhereInput;
}
export {};
