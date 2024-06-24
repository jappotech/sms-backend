import { Matiere } from '../entity/matiere.entity';
declare const CreateMatiereInput_base: import("@nestjs/common").Type<Pick<Matiere, "nom" | "code" | "credit" | "coefficient" | "nbHeure" | "uniteEnseignementId">>;
export declare class CreateMatiereInput extends CreateMatiereInput_base {
}
export {};
