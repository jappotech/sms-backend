import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args';
import { AdresseRelationFilter } from 'src/models/adresses/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { PermissionListRelationFilter } from 'src/models/permissions/dtos/where.args';
export declare class UtilisateurWhereUniqueInput {
    id: number;
}
export declare class UtilisateurWhereInputStrict implements RestrictProperties<UtilisateurWhereInputStrict, Prisma.UtilisateurWhereInput> {
    id: IntFilter;
    matricule: StringFilter;
    createdAt: StringFilter;
    updatedAt: DateTimeFilter;
    prenom: StringFilter;
    nom: StringFilter;
    dateNaissance: DateTimeFilter;
    lieuNaissance: StringFilter;
    cni: StringFilter;
    genre: Prisma.EnumGenreFilter;
    nationalite: StringFilter;
    groupeSanguin: Prisma.EnumGroupeSanguinNullableFilter;
    etablissementId: IntFilter;
    statutCompte: Prisma.EnumStatutCompteNullableFilter;
    roles: Prisma.EnumRoleNullableListFilter;
    contactId: IntFilter;
    adresseId: IntFilter;
    accountId: IntFilter;
    contact: ContactRelationFilter;
    adresse: AdresseRelationFilter;
    etudiant: EtudiantRelationFilter;
    permissions: PermissionListRelationFilter;
    Professeur: ProfesseurRelationFilter;
    etablissement: EtablissementRelationFilter;
    AND: UtilisateurWhereInputStrict[];
    OR: UtilisateurWhereInputStrict[];
    NOT: UtilisateurWhereInputStrict[];
}
declare const UtilisateurWhereInput_base: import("@nestjs/common").Type<Partial<UtilisateurWhereInputStrict>>;
export declare class UtilisateurWhereInput extends UtilisateurWhereInput_base {
    id: IntFilter;
    matricule: StringFilter;
    createdAt: StringFilter;
    updatedAt: DateTimeFilter;
    prenom: StringFilter;
    nom: StringFilter;
    dateNaissance: DateTimeFilter;
    lieuNaissance: StringFilter;
    cni: StringFilter;
    genre: Prisma.EnumGenreFilter;
    nationalite: StringFilter;
    groupeSanguin: Prisma.EnumGroupeSanguinNullableFilter;
    etablissementId: IntFilter;
    statutCompte: Prisma.EnumStatutCompteNullableFilter;
    roles: Prisma.EnumRoleNullableListFilter;
    contactId: IntFilter;
    accountId: IntFilter;
    adresseId: IntFilter;
    contact: ContactRelationFilter;
    adresse: AdresseRelationFilter;
    etudiant: EtudiantRelationFilter;
    permissions: PermissionListRelationFilter;
    Professeur: ProfesseurRelationFilter;
    etablissement: EtablissementRelationFilter;
    AND: UtilisateurWhereInputStrict[];
    OR: UtilisateurWhereInputStrict[];
    NOT: UtilisateurWhereInputStrict[];
}
export declare class UtilisateurListRelationFilter {
    every?: UtilisateurWhereInput;
    some?: UtilisateurWhereInput;
    none?: UtilisateurWhereInput;
}
export declare class UtilisateurRelationFilter {
    is?: UtilisateurWhereInput;
    isNot?: UtilisateurWhereInput;
}
export {};
