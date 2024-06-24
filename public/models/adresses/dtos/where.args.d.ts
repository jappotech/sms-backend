import { Prisma } from '@prisma/client';
import { IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class AdresseWhereUniqueInput {
    id: number;
}
export declare class AdresseWhereInputStrict implements RestrictProperties<AdresseWhereInputStrict, Prisma.AdresseWhereInput> {
    id: IntFilter;
    pays: StringFilter;
    region: StringFilter;
    ville: StringFilter;
    codePostal: StringFilter;
    geolocalisation: StringFilter;
    utilisateurs: UtilisateurListRelationFilter;
    etablissements: EtablissementListRelationFilter;
    AND: AdresseWhereInputStrict[];
    OR: AdresseWhereInputStrict[];
    NOT: AdresseWhereInputStrict[];
}
declare const AdresseWhereInput_base: import("@nestjs/common").Type<Partial<AdresseWhereInputStrict>>;
export declare class AdresseWhereInput extends AdresseWhereInput_base {
    id: IntFilter;
    pays: StringFilter;
    region: StringFilter;
    ville: StringFilter;
    codePostal: StringFilter;
    geolocalisation: StringFilter;
    utilisateurs: UtilisateurListRelationFilter;
    etablissements: EtablissementListRelationFilter;
    AND: AdresseWhereInput[];
    OR: AdresseWhereInput[];
    NOT: AdresseWhereInput[];
}
export declare class AdresseListRelationFilter {
    every?: AdresseWhereInput;
    some?: AdresseWhereInput;
    none?: AdresseWhereInput;
}
export declare class AdresseRelationFilter {
    is?: AdresseWhereInput;
    isNot?: AdresseWhereInput;
}
export {};
