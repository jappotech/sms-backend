import { Semestre } from '../entity/semestre.entity';
declare const CreateSemestreInput_base: import("@nestjs/common").Type<Pick<Semestre, "etablissementId" | "classeId" | "dateDebut" | "dateFin" | "numero" | "grade" | "nombreSemaine">>;
export declare class CreateSemestreInput extends CreateSemestreInput_base {
}
export {};
