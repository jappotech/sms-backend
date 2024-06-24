import { Adresse as AdresseType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Adresse implements RestrictProperties<Adresse, AdresseType> {
    id: number;
    pays: string;
    region: string;
    ville: string;
    codePostal: string;
    geolocalisation: string;
}
