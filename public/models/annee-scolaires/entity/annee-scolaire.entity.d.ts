import { AnneeScolaire as AnneeScolaireType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class AnneeScolaire implements RestrictProperties<AnneeScolaire, AnneeScolaireType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    dateDebut: number;
    dateFin: number;
    nom: string;
}
