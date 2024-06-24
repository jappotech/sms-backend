import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { EvaluationEtudiantsOrderByRelationAggregateInput } from 'src/models/evaluation-etudiants/dtos/order-by.args';
import { FeuillePresenceOrderByRelationAggregateInput } from 'src/models/feuille-presences/dtos/order-by.args';
import { MatiereOrderByWithRelationInput } from 'src/models/matieres/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';
import { SalleOrderByWithRelationInput } from 'src/models/salles/dtos/order-by.args';
export declare class CoursOrderByWithRelationInputStrict implements RestrictProperties<CoursOrderByWithRelationInputStrict, Prisma.CoursOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    description: Prisma.SortOrder | Prisma.SortOrderInput;
    dateDebut: Prisma.SortOrder;
    dateFin: Prisma.SortOrder;
    heureDebut: Prisma.SortOrder;
    heureFin: Prisma.SortOrder;
    matiereId: Prisma.SortOrder;
    salleId: Prisma.SortOrder;
    classeId: Prisma.SortOrder;
    professeurId: Prisma.SortOrder | Prisma.SortOrderInput;
    matiere: MatiereOrderByWithRelationInput;
    salle: SalleOrderByWithRelationInput;
    classe: ClasseOrderByWithRelationInput;
    evaluationEtudiant: EvaluationEtudiantsOrderByRelationAggregateInput;
    feuillePresences: FeuillePresenceOrderByRelationAggregateInput;
    professeur: ProfesseurOrderByWithRelationInput;
    emploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}
declare const CoursOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<CoursOrderByWithRelationInputStrict>>;
export declare class CoursOrderByWithRelationInput extends CoursOrderByWithRelationInput_base {
}
export declare class CoursOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
