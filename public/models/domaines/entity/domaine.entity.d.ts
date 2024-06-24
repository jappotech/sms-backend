import { Domaine as DomaineType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Domaine implements RestrictProperties<Domaine, DomaineType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    slug: string;
}
