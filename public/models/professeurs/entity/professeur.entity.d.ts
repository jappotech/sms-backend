import { Professeur as ProfesseurType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Professeur implements RestrictProperties<Professeur, ProfesseurType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    profileId: number;
}
