import { Classe as ClasseType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Classe implements RestrictProperties<Classe, ClasseType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
    niveau: string;
    etablissementId: number;
    specialiteId: number;
    anneeScolaireId: number;
}
