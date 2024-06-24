import { Etablissement as EtablissementType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Etablissement implements RestrictProperties<Etablissement, EtablissementType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    matricule: string;
    sigle: string;
    dateCreation: Date;
    logo: string;
    anneeEnCours: string;
    adresseId: number;
    contactId: number;
}
