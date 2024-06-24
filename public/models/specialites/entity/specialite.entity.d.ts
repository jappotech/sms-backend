import { Specialite as SpecialiteType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Specialite implements RestrictProperties<Specialite, SpecialiteType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    slug: string;
    mentionId: number;
    etablissementId: number;
}
