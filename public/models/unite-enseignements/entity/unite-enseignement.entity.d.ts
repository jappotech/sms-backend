import { UniteEnseignement as UniteEnseignementType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class UniteEnseignement implements RestrictProperties<UniteEnseignement, UniteEnseignementType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    code: string;
    nom: string;
    credit: number;
    numero: number;
    semestreId: number;
}
