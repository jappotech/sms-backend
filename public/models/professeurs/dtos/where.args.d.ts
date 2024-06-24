import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties } from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { UtilisateurRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class ProfesseurWhereUniqueInput {
    id: number;
}
export declare class ProfesseurWhereInputStrict implements RestrictProperties<ProfesseurWhereInputStrict, Prisma.ProfesseurWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    profileId: IntFilter;
    profile: UtilisateurRelationFilter;
    cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: ProfesseurWhereInputStrict[];
    OR: ProfesseurWhereInputStrict[];
    NOT: ProfesseurWhereInputStrict[];
}
declare const ProfesseurWhereInput_base: import("@nestjs/common").Type<Partial<ProfesseurWhereInputStrict>>;
export declare class ProfesseurWhereInput extends ProfesseurWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    profileId: IntFilter;
    profile: UtilisateurRelationFilter;
    cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: ProfesseurWhereInput[];
    OR: ProfesseurWhereInput[];
    NOT: ProfesseurWhereInput[];
}
export declare class ProfesseurListRelationFilter {
    every?: ProfesseurWhereInput;
    some?: ProfesseurWhereInput;
    none?: ProfesseurWhereInput;
}
export declare class ProfesseurRelationFilter {
    is?: ProfesseurWhereInput;
    isNot?: ProfesseurWhereInput;
}
export {};
