import { Inscription as InscriptionType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Inscription implements RestrictProperties<Inscription, InscriptionType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    reference: string;
    premiereInscription: boolean;
    dernierDiplome: string;
    autreEtablissement: string;
    activiteProfessionnel: string;
    niveau: string;
    statut: string;
    diplomeId: number;
    etudiantId: number;
    classeId: number;
}
