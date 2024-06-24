import { Matiere as MatiereType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Matiere implements RestrictProperties<Matiere, MatiereType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    code: string;
    nom: string;
    credit: number;
    coefficient: number;
    nbHeure: number;
    uniteEnseignementId: number;
}
