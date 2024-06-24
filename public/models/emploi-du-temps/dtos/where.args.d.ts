import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { SalleRelationFilter } from 'src/models/salles/dtos/where.args';
export declare class EmploiDuTempsWhereUniqueInput {
    id: number;
}
export declare class EmploiDuTempsWhereInputStrict implements RestrictProperties<EmploiDuTempsWhereInputStrict, Prisma.EmploiDuTempsWhereInput> {
    id: IntFilter;
    coursId: IntFilter;
    classeId: IntFilter;
    professeurId: IntFilter;
    salleId: IntFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    cours: CoursRelationFilter;
    classe: ClasseRelationFilter;
    professeur: ProfesseurRelationFilter;
    salle: SalleRelationFilter;
    AND: EmploiDuTempsWhereInputStrict[];
    OR: EmploiDuTempsWhereInputStrict[];
    NOT: EmploiDuTempsWhereInputStrict[];
}
declare const EmploiDuTempsWhereInput_base: import("@nestjs/common").Type<Partial<EmploiDuTempsWhereInputStrict>>;
export declare class EmploiDuTempsWhereInput extends EmploiDuTempsWhereInput_base {
    id: IntFilter;
    coursId: IntFilter;
    classeId: IntFilter;
    professeurId: IntFilter;
    salleId: IntFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    cours: CoursRelationFilter;
    classe: ClasseRelationFilter;
    professeur: ProfesseurRelationFilter;
    salle: SalleRelationFilter;
    AND: EmploiDuTempsWhereInput[];
    OR: EmploiDuTempsWhereInput[];
    NOT: EmploiDuTempsWhereInput[];
}
export declare class EmploiDuTempsListRelationFilter {
    every?: EmploiDuTempsWhereInput;
    some?: EmploiDuTempsWhereInput;
    none?: EmploiDuTempsWhereInput;
}
export declare class EmploiDuTempsRelationFilter {
    is?: EmploiDuTempsWhereInput;
    isNot?: EmploiDuTempsWhereInput;
}
export {};
