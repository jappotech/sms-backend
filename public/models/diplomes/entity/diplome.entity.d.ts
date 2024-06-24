import { Diplome as DiplomeType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Diplome implements RestrictProperties<Diplome, DiplomeType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    finalite: string;
    entite: string;
    habilitation: string;
    partenaires: string[];
    dateCreation: Date;
    dateHabilitation: Date;
    dateEcheance: Date;
    duree: number;
    specialiteId: number;
}
