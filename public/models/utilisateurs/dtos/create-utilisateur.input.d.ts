import { Utilisateur } from '../entity/utilisateur.entity';
import { CreateAccountInput } from 'src/models/accounts/dtos/create-account.input';
import { $Enums } from '@prisma/client';
export declare class UtilisateurWithAccount implements Utilisateur {
    id: number;
    matricule: string;
    createdAt: Date;
    updatedAt: Date;
    prenom: string;
    nom: string;
    dateNaissance: Date;
    lieuNaissance: string;
    cni: string;
    genre: $Enums.Genre;
    nationalite: string;
    groupeSanguin: $Enums.GroupeSanguin;
    etablissementId: number;
    statutCompte: $Enums.StatutCompte;
    roles: $Enums.Role[];
    contactId: number;
    accountId: number;
    adresseId: number;
    account: CreateAccountInput;
}
declare const CreateUtilisateurInput_base: import("@nestjs/common").Type<Pick<UtilisateurWithAccount, "account" | "matricule" | "prenom" | "nom" | "dateNaissance" | "lieuNaissance" | "cni" | "genre" | "nationalite" | "groupeSanguin" | "etablissementId" | "statutCompte" | "roles" | "contactId" | "adresseId">>;
export declare class CreateUtilisateurInput extends CreateUtilisateurInput_base {
}
export {};
