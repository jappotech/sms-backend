import { Etudiant as EtudiantType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Etudiant implements RestrictProperties<Etudiant, EtudiantType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    ine: string;
    baccaleaureat: string;
    anneeBaccaleaureat: number;
    profileId: number;
    feuillePresencesId: number;
}
