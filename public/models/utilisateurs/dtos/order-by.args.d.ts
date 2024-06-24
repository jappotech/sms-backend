import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AdresseOrderByWithRelationInput } from 'src/models/adresses/dtos/order-by.args';
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args';
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
import { PermissionOrderByRelationAggregateInput } from 'src/models/permissions/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';
export declare class UtilisateurOrderByWithRelationInputStrict implements RestrictProperties<UtilisateurOrderByWithRelationInputStrict, Prisma.UtilisateurOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    matricule: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    prenom: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput;
    lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput;
    cni: Prisma.SortOrder | Prisma.SortOrderInput;
    genre: Prisma.SortOrder;
    nationalite: Prisma.SortOrder | Prisma.SortOrderInput;
    groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput;
    etablissementId: Prisma.SortOrder | Prisma.SortOrderInput;
    statutCompte: Prisma.SortOrder | Prisma.SortOrderInput;
    roles: Prisma.SortOrder;
    contactId: Prisma.SortOrder | Prisma.SortOrderInput;
    adresseId: Prisma.SortOrder | Prisma.SortOrderInput;
    accountId: Prisma.SortOrder | Prisma.SortOrderInput;
    contact: ContactOrderByWithRelationInput;
    adresse: AdresseOrderByWithRelationInput;
    etablissement: EtablissementOrderByWithRelationInput;
    etudiant: EtudiantOrderByWithRelationInput;
    permissions: PermissionOrderByRelationAggregateInput;
    Professeur: ProfesseurOrderByWithRelationInput;
}
declare const UtilisateurOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<UtilisateurOrderByWithRelationInputStrict>>;
export declare class UtilisateurOrderByWithRelationInput extends UtilisateurOrderByWithRelationInput_base {
    id: Prisma.SortOrder;
    matricule: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    prenom: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    dateNaissance: Prisma.SortOrder | Prisma.SortOrderInput;
    lieuNaissance: Prisma.SortOrder | Prisma.SortOrderInput;
    cni: Prisma.SortOrder | Prisma.SortOrderInput;
    genre: Prisma.SortOrder;
    nationalite: Prisma.SortOrder | Prisma.SortOrderInput;
    groupeSanguin: Prisma.SortOrder | Prisma.SortOrderInput;
    etablissementId: Prisma.SortOrder | Prisma.SortOrderInput;
    statutCompte: Prisma.SortOrder | Prisma.SortOrderInput;
    roles: Prisma.SortOrder;
    contactId: Prisma.SortOrder | Prisma.SortOrderInput;
    adresseId: Prisma.SortOrder | Prisma.SortOrderInput;
    accountId: Prisma.SortOrder | Prisma.SortOrderInput;
    contact: ContactOrderByWithRelationInput;
    adresse: AdresseOrderByWithRelationInput;
    etablissement: EtablissementOrderByWithRelationInput;
    etudiant: EtudiantOrderByWithRelationInput;
    permissions: PermissionOrderByRelationAggregateInput;
    Professeur: ProfesseurOrderByWithRelationInput;
}
export declare class UtilisateurOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
