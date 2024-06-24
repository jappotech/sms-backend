import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { AdresseRelationFilter } from 'src/models/adresses/dtos/where.args';
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args';
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args';
import { DomaineListRelationFilter } from 'src/models/domaines/dtos/where.args';
import { SalleListRelationFilter } from 'src/models/salles/dtos/where.args';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class EtablissementWhereUniqueInput {
    id: number;
}
export declare class EtablissementWhereInputStrict implements RestrictProperties<EtablissementWhereInputStrict, Prisma.EtablissementWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    matricule: StringFilter;
    sigle: StringFilter;
    dateCreation: StringFilter;
    logo: StringFilter;
    anneeEnCours: StringFilter;
    adresseId: IntFilter;
    contactId: IntFilter;
    adresse: AdresseRelationFilter;
    contact: ContactRelationFilter;
    utilisateurs: UtilisateurListRelationFilter;
    domaines: DomaineListRelationFilter;
    classes: ClasseListRelationFilter;
    salle: SalleListRelationFilter;
    AND: EtablissementWhereInputStrict[];
    OR: EtablissementWhereInputStrict[];
    NOT: EtablissementWhereInputStrict[];
}
declare const EtablissementWhereInput_base: import("@nestjs/common").Type<Partial<EtablissementWhereInputStrict>>;
export declare class EtablissementWhereInput extends EtablissementWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    matricule: StringFilter;
    sigle: StringFilter;
    dateCreation: StringFilter;
    logo: StringFilter;
    anneeEnCours: StringFilter;
    adresseId: IntFilter;
    contactId: IntFilter;
    adresse: AdresseRelationFilter;
    contact: ContactRelationFilter;
    utilisateurs: UtilisateurListRelationFilter;
    domaines: DomaineListRelationFilter;
    classes: ClasseListRelationFilter;
    salle: SalleListRelationFilter;
    AND: EtablissementWhereInput[];
    OR: EtablissementWhereInput[];
    NOT: EtablissementWhereInput[];
}
export declare class EtablissementListRelationFilter {
    every?: EtablissementWhereInput;
    some?: EtablissementWhereInput;
    none?: EtablissementWhereInput;
}
export declare class EtablissementRelationFilter {
    is?: EtablissementWhereInput;
    isNot?: EtablissementWhereInput;
}
export {};
