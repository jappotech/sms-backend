import { Salle as SalleType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Salle implements RestrictProperties<Salle, SalleType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    capacite: number;
    batiment: string;
    etablissementId: number;
    estDisponible: boolean;
}
