import { Cours as CoursType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Cours implements RestrictProperties<Cours, CoursType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    heureDebut: Date;
    heureFin: Date;
    matiereId: number;
    salleId: number;
    classeId: number;
    professeurId: number;
}
