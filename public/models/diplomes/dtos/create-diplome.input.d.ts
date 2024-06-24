import { Diplome } from '../entity/diplome.entity';
declare const CreateDiplomeInput_base: import("@nestjs/common").Type<Pick<Diplome, "nom" | "dateCreation" | "specialiteId" | "finalite" | "entite" | "habilitation" | "partenaires" | "dateHabilitation" | "dateEcheance" | "duree">>;
export declare class CreateDiplomeInput extends CreateDiplomeInput_base {
}
export {};
