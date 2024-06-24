import { Paiement as PaiementType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Paiement implements RestrictProperties<Paiement, PaiementType> {
    id: number;
    etudiantId: number;
    montant: number;
    datePaiement: Date;
    methodePaiement: string;
    referencePaiement: string;
    typeFrais: string;
    statutPaiement: string;
}
