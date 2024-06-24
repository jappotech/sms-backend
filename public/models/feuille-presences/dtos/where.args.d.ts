import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties } from 'src/common/dtos/common.input';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
export declare class FeuillePresenceWhereUniqueInput {
    id: number;
}
export declare class FeuillePresenceWhereInputStrict implements RestrictProperties<FeuillePresenceWhereInputStrict, Prisma.FeuillePresenceWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    date: DateTimeFilter;
    heureDebut: DateTimeFilter;
    heureFin: DateTimeFilter;
    coursId: IntFilter;
    etudiantId: IntFilter;
    cours: CoursRelationFilter;
    etudiant: EtudiantRelationFilter;
    AND: FeuillePresenceWhereInputStrict[];
    OR: FeuillePresenceWhereInputStrict[];
    NOT: FeuillePresenceWhereInputStrict[];
}
declare const FeuillePresenceWhereInput_base: import("@nestjs/common").Type<Partial<FeuillePresenceWhereInputStrict>>;
export declare class FeuillePresenceWhereInput extends FeuillePresenceWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    date: DateTimeFilter;
    heureDebut: DateTimeFilter;
    heureFin: DateTimeFilter;
    coursId: IntFilter;
    etudiantId: IntFilter;
    cours: CoursRelationFilter;
    etudiant: EtudiantRelationFilter;
    AND: FeuillePresenceWhereInput[];
    OR: FeuillePresenceWhereInput[];
    NOT: FeuillePresenceWhereInput[];
}
export declare class FeuillePresenceListRelationFilter {
    every?: FeuillePresenceWhereInput;
    some?: FeuillePresenceWhereInput;
    none?: FeuillePresenceWhereInput;
}
export declare class FeuillePresenceRelationFilter {
    is?: FeuillePresenceWhereInput;
    isNot?: FeuillePresenceWhereInput;
}
export {};
