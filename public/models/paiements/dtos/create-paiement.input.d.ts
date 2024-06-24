import { Paiement } from '../entity/paiement.entity';
declare const CreatePaiementInput_base: import("@nestjs/common").Type<Pick<Paiement, "etudiantId" | "montant" | "datePaiement" | "methodePaiement" | "referencePaiement" | "typeFrais" | "statutPaiement">>;
export declare class CreatePaiementInput extends CreatePaiementInput_base {
}
export {};
