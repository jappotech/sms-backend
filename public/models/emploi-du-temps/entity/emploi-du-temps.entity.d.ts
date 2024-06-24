import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class EmploiDuTemps implements RestrictProperties<EmploiDuTemps, EmploiDuTempsType> {
    id: number;
    coursId: number;
    classeId: number;
    professeurId: number;
    salleId: number;
    dateDebut: Date;
    dateFin: Date;
}
