import { $Enums, Semestre as SemestreType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Semestre implements RestrictProperties<Semestre, SemestreType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    numero: number;
    grade: $Enums.TypeDiplome;
    dateDebut: Date;
    dateFin: Date;
    nombreSemaine: number;
    etablissementId: number;
    classeId: number;
}
