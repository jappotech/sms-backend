import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { AnneeScolaireRelationFilter } from 'src/models/annee-scolaires/dtos/where.args';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EtablissementRelationFilter } from 'src/models/etablissements/dtos/where.args';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { SemestreListRelationFilter } from 'src/models/semestres/dtos/where.args';
import { SpecialiteRelationFilter } from 'src/models/specialites/dtos/where.args';
export declare class ClasseWhereUniqueInput {
    id: number;
}
export declare class ClasseWhereInputStrict implements RestrictProperties<ClasseWhereInputStrict, Prisma.ClasseWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    code: StringFilter;
    niveau: StringFilter;
    anneeScolaireId: IntFilter;
    AnneeScolaire: AnneeScolaireRelationFilter;
    etablissementId: IntFilter;
    specialiteId: IntFilter;
    etablissement: EtablissementRelationFilter;
    semestres: SemestreListRelationFilter;
    inscriptions: InscriptionListRelationFilter;
    specialite: SpecialiteRelationFilter;
    Cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: ClasseWhereInputStrict[];
    OR: ClasseWhereInputStrict[];
    NOT: ClasseWhereInputStrict[];
}
declare const ClasseWhereInput_base: import("@nestjs/common").Type<Partial<ClasseWhereInputStrict>>;
export declare class ClasseWhereInput extends ClasseWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    code: StringFilter;
    niveau: StringFilter;
    anneeScolaireId: IntFilter;
    AnneeScolaire: AnneeScolaireRelationFilter;
    etablissementId: IntFilter;
    specialiteId: IntFilter;
    etablissement: EtablissementRelationFilter;
    semestres: SemestreListRelationFilter;
    inscriptions: InscriptionListRelationFilter;
    specialite: SpecialiteRelationFilter;
    Cours: CoursListRelationFilter;
    EmploiDuTemps: EmploiDuTempsListRelationFilter;
    AND: ClasseWhereInput[];
    OR: ClasseWhereInput[];
    NOT: ClasseWhereInput[];
}
export declare class ClasseListRelationFilter {
    every?: ClasseWhereInput;
    some?: ClasseWhereInput;
    none?: ClasseWhereInput;
}
export declare class ClasseRelationFilter {
    is?: ClasseWhereInput;
    isNot?: ClasseWhereInput;
}
export {};
