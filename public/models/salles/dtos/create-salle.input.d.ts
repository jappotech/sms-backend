import { Salle } from '../entity/salle.entity';
declare const CreateSalleInput_base: import("@nestjs/common").Type<Pick<Salle, "nom" | "etablissementId" | "capacite" | "batiment" | "estDisponible">>;
export declare class CreateSalleInput extends CreateSalleInput_base {
}
export {};
