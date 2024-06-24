import { Cours } from '../entity/cours.entity';
declare const CreateCoursInput_base: import("@nestjs/common").Type<Pick<Cours, "nom" | "classeId" | "professeurId" | "salleId" | "dateDebut" | "dateFin" | "description" | "heureDebut" | "heureFin" | "matiereId">>;
export declare class CreateCoursInput extends CreateCoursInput_base {
}
export {};
