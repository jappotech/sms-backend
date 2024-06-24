import { $Enums, Utilisateur as UtilisateurType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Utilisateur implements RestrictProperties<Utilisateur, UtilisateurType> {
    id: number;
    matricule: string;
    createdAt: Date;
    updatedAt: Date;
    prenom: string;
    nom: string;
    dateNaissance: Date;
    lieuNaissance: string;
    cni: string;
    genre: $Enums.Genre | null;
    nationalite: string;
    groupeSanguin: $Enums.GroupeSanguin;
    etablissementId: number;
    statutCompte: $Enums.StatutCompte;
    roles: $Enums.Role[];
    contactId: number;
    accountId: number;
    adresseId: number;
}
