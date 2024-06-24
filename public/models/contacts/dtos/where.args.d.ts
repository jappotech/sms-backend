import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { ReseauSocialListRelationFilter } from 'src/models/reseau-socials/dtos/where.args';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class ContactWhereUniqueInput {
    id: number;
}
export declare class ContactWhereInputStrict implements RestrictProperties<ContactWhereInputStrict, Prisma.ContactWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    telephone: StringFilter;
    fix: StringFilter;
    fax: StringFilter;
    email: StringFilter;
    siteWeb: StringFilter;
    reseauxSociaux: ReseauSocialListRelationFilter;
    utilisateurs: UtilisateurListRelationFilter;
    etablissements: EtablissementListRelationFilter;
    AND: ContactWhereInputStrict[];
    OR: ContactWhereInputStrict[];
    NOT: ContactWhereInputStrict[];
}
declare const ContactWhereInput_base: import("@nestjs/common").Type<Partial<ContactWhereInputStrict>>;
export declare class ContactWhereInput extends ContactWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    telephone: StringFilter;
    fix: StringFilter;
    fax: StringFilter;
    email: StringFilter;
    siteWeb: StringFilter;
    reseauxSociaux: ReseauSocialListRelationFilter;
    utilisateurs: UtilisateurListRelationFilter;
    etablissements: EtablissementListRelationFilter;
    AND: ContactWhereInput[];
    OR: ContactWhereInput[];
    NOT: ContactWhereInput[];
}
export declare class ContactListRelationFilter {
    every?: ContactWhereInput;
    some?: ContactWhereInput;
    none?: ContactWhereInput;
}
export declare class ContactRelationFilter {
    is?: ContactWhereInput;
    isNot?: ContactWhereInput;
}
export {};
