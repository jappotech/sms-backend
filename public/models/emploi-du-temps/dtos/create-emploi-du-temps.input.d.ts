import { EmploiDuTemps } from '../entity/emploi-du-temps.entity';
declare const CreateEmploiDuTempsInput_base: import("@nestjs/common").Type<Pick<EmploiDuTemps, "coursId" | "classeId" | "professeurId" | "salleId" | "dateDebut" | "dateFin">>;
export declare class CreateEmploiDuTempsInput extends CreateEmploiDuTempsInput_base {
}
export {};
