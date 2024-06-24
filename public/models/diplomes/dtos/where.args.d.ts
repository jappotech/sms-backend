import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter, StringListFilter } from 'src/common/dtos/common.input';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { SpecialiteRelationFilter } from 'src/models/specialites/dtos/where.args';
export declare class DiplomeWhereUniqueInput {
    id: number;
}
export declare class DiplomeWhereInputStrict implements RestrictProperties<DiplomeWhereInputStrict, Prisma.DiplomeWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    finalite: StringFilter;
    entite: StringFilter;
    habilitation: StringFilter;
    partenaires: StringListFilter;
    dateCreation: DateTimeFilter;
    dateHabilitation: DateTimeFilter;
    dateEcheance: DateTimeFilter;
    duree: IntFilter;
    specialiteId: IntFilter;
    inscriptions: InscriptionListRelationFilter;
    specialite: SpecialiteRelationFilter;
    AND: DiplomeWhereInputStrict[];
    OR: DiplomeWhereInputStrict[];
    NOT: DiplomeWhereInputStrict[];
}
declare const DiplomeWhereInput_base: import("@nestjs/common").Type<Partial<DiplomeWhereInputStrict>>;
export declare class DiplomeWhereInput extends DiplomeWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    nom: StringFilter;
    finalite: StringFilter;
    entite: StringFilter;
    habilitation: StringFilter;
    partenaires: StringListFilter;
    dateCreation: DateTimeFilter;
    dateHabilitation: DateTimeFilter;
    dateEcheance: DateTimeFilter;
    duree: IntFilter;
    specialiteId: IntFilter;
    inscriptions: InscriptionListRelationFilter;
    specialite: SpecialiteRelationFilter;
    AND: DiplomeWhereInput[];
    OR: DiplomeWhereInput[];
    NOT: DiplomeWhereInput[];
}
export declare class DiplomeListRelationFilter {
    every?: DiplomeWhereInput;
    some?: DiplomeWhereInput;
    none?: DiplomeWhereInput;
}
export declare class DiplomeRelationFilter {
    is?: DiplomeWhereInput;
    isNot?: DiplomeWhereInput;
}
export {};
