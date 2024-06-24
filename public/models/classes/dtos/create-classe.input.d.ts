import { Classe } from '../entity/classe.entity';
declare const CreateClasseInput_base: import("@nestjs/common").Type<Pick<Classe, "nom" | "etablissementId" | "code" | "niveau" | "anneeScolaireId" | "specialiteId">>;
export declare class CreateClasseInput extends CreateClasseInput_base {
}
export {};
