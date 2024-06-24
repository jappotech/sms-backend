import { Inscription } from '../entity/inscription.entity';
declare const CreateInscriptionInput_base: import("@nestjs/common").Type<Pick<Inscription, "classeId" | "niveau" | "etudiantId" | "reference" | "premiereInscription" | "dernierDiplome" | "autreEtablissement" | "activiteProfessionnel" | "statut" | "diplomeId">>;
export declare class CreateInscriptionInput extends CreateInscriptionInput_base {
}
export {};
