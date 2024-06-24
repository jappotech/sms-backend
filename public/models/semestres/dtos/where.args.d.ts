import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { UniteEnseignementListRelationFilter } from 'src/models/unite-enseignements/dtos/where.args';
export declare class SemestreWhereUniqueInput {
    id: number;
}
export declare class SemestreWhereInputStrict implements RestrictProperties<SemestreWhereInputStrict, Prisma.SemestreWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    numero: IntFilter;
    grade: Prisma.EnumTypeDiplomeFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    nombreSemaine: IntFilter;
    classeId: IntFilter;
    etablissementId: IntFilter;
    uniteEnseignement: UniteEnseignementListRelationFilter;
    Classe: ClasseRelationFilter;
    AND: SemestreWhereInputStrict[];
    OR: SemestreWhereInputStrict[];
    NOT: SemestreWhereInputStrict[];
}
declare const SemestreWhereInput_base: import("@nestjs/common").Type<Partial<SemestreWhereInputStrict>>;
export declare class SemestreWhereInput extends SemestreWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    numero: IntFilter;
    grade: Prisma.EnumTypeDiplomeFilter;
    dateDebut: DateTimeFilter;
    dateFin: DateTimeFilter;
    nombreSemaine: IntFilter;
    classeId: IntFilter;
    etablissementId: IntFilter;
    uniteEnseignement: UniteEnseignementListRelationFilter;
    Classe: ClasseRelationFilter;
    AND: SemestreWhereInput[];
    OR: SemestreWhereInput[];
    NOT: SemestreWhereInput[];
}
export declare class SemestreListRelationFilter {
    every?: SemestreWhereInput;
    some?: SemestreWhereInput;
    none?: SemestreWhereInput;
}
export declare class SemestreRelationFilter {
    is?: SemestreWhereInput;
    isNot?: SemestreWhereInput;
}
export {};
