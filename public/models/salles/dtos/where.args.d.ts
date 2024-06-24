import { Prisma } from '@prisma/client';
import { BoolFilter, DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';
export declare class SalleWhereUniqueInput {
    id: number;
}
export declare class SalleWhereInputStrict implements RestrictProperties<SalleWhereInputStrict, Prisma.SalleWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    capacite: IntFilter;
    batiment: StringFilter;
    etablissementId: IntFilter;
    estDisponible: BoolFilter;
    etablissement: EtablissementRelationFilter;
    cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: SalleWhereInput[];
    OR: SalleWhereInput[];
    NOT: SalleWhereInput[];
}
declare const SalleWhereInput_base: import("@nestjs/common").Type<Partial<SalleWhereInputStrict>>;
export declare class SalleWhereInput extends SalleWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    capacite: IntFilter;
    batiment: StringFilter;
    etablissementId: IntFilter;
    estDisponible: BoolFilter;
    etablissement: EtablissementRelationFilter;
    cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: SalleWhereInput[];
    OR: SalleWhereInput[];
    NOT: SalleWhereInput[];
}
export declare class SalleListRelationFilter {
    every?: SalleWhereInput;
    some?: SalleWhereInput;
    none?: SalleWhereInput;
}
export declare class SalleRelationFilter {
    is?: SalleWhereInput;
    isNot?: SalleWhereInput;
}
export {};
