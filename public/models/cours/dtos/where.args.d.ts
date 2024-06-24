import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { AnneeScolaireRelationFilter } from 'src/models/annee-scolaires/dtos/where.args';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EvaluationEtudiantsListRelationFilter } from 'src/models/evaluation-etudiants/dtos/where.args';
import { FeuillePresenceListRelationFilter } from 'src/models/feuille-presences/dtos/where.args';
import { MatiereRelationFilter } from 'src/models/matieres/dtos/where.args';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { SalleRelationFilter } from 'src/models/salles/dtos/where.args';
export declare class CoursWhereUniqueInput {
    id: number;
}
export declare class CoursWhereInputStrict implements RestrictProperties<CoursWhereInputStrict, Prisma.CoursWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    description: StringFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    heureDebut: DateTimeFilter;
    heureFin: DateTimeFilter;
    matiereId: IntFilter;
    salleId: IntFilter;
    classeId: IntFilter;
    professeurId: IntFilter;
    matiere: MatiereRelationFilter;
    salle: SalleRelationFilter;
    classe: ClasseRelationFilter;
    evaluationEtudiant: EvaluationEtudiantsListRelationFilter;
    feuillePresences: FeuillePresenceListRelationFilter;
    professeur: ProfesseurRelationFilter;
    emploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: CoursWhereInputStrict[];
    OR: CoursWhereInputStrict[];
    NOT: CoursWhereInputStrict[];
}
declare const CoursWhereInput_base: import("@nestjs/common").Type<Partial<CoursWhereInputStrict>>;
export declare class CoursWhereInput extends CoursWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    description: StringFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    heureDebut: DateTimeFilter;
    heureFin: DateTimeFilter;
    matiereId: IntFilter;
    salleId: IntFilter;
    classeId: IntFilter;
    professeurId: IntFilter;
    matiere: MatiereRelationFilter;
    salle: SalleRelationFilter;
    classe: ClasseRelationFilter;
    evaluationEtudiant: EvaluationEtudiantsListRelationFilter;
    feuillePresences: FeuillePresenceListRelationFilter;
    professeur: ProfesseurRelationFilter;
    emploiDuTemps: EmploiDuTempsListRelationFilter;
    anneeScolaireId: IntFilter;
    AnneeScolaire: AnneeScolaireRelationFilter;
    AND: CoursWhereInput[];
    OR: CoursWhereInput[];
    NOT: CoursWhereInput[];
}
export declare class CoursListRelationFilter {
    every?: CoursWhereInput;
    some?: CoursWhereInput;
    none?: CoursWhereInput;
}
export declare class CoursRelationFilter {
    is?: CoursWhereInput;
    isNot?: CoursWhereInput;
}
export {};
