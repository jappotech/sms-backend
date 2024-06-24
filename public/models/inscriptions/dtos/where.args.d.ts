import { Prisma } from '@prisma/client';
import { BoolFilter, DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { DiplomeRelationFilter } from 'src/models/diplomes/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
export declare class InscriptionWhereUniqueInput {
    id: number;
}
export declare class InscriptionWhereInputStrict implements RestrictProperties<InscriptionWhereInputStrict, Prisma.InscriptionWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    reference: StringFilter;
    premiereInscription: BoolFilter;
    dernierDiplome: StringFilter;
    autreEtablissement: StringFilter;
    activiteProfessionnel: StringFilter;
    niveau: StringFilter;
    statut: StringFilter;
    diplomeId: IntFilter;
    etudiantId: IntFilter;
    classeId: IntFilter;
    diplome: DiplomeRelationFilter;
    etudiant: EtudiantRelationFilter;
    classe: ClasseRelationFilter;
    AND: InscriptionWhereInputStrict[];
    OR: InscriptionWhereInputStrict[];
    NOT: InscriptionWhereInputStrict[];
}
declare const InscriptionWhereInput_base: import("@nestjs/common").Type<Partial<InscriptionWhereInputStrict>>;
export declare class InscriptionWhereInput extends InscriptionWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    reference: StringFilter;
    premiereInscription: BoolFilter;
    dernierDiplome: StringFilter;
    autreEtablissement: StringFilter;
    activiteProfessionnel: StringFilter;
    niveau: StringFilter;
    statut: StringFilter;
    diplomeId: IntFilter;
    etudiantId: IntFilter;
    classeId: IntFilter;
    diplome: DiplomeRelationFilter;
    etudiant: EtudiantRelationFilter;
    classe: ClasseRelationFilter;
    AND: InscriptionWhereInput[];
    OR: InscriptionWhereInput[];
    NOT: InscriptionWhereInput[];
}
export declare class InscriptionListRelationFilter {
    every?: InscriptionWhereInput;
    some?: InscriptionWhereInput;
    none?: InscriptionWhereInput;
}
export declare class InscriptionRelationFilter {
    is?: InscriptionWhereInput;
    isNot?: InscriptionWhereInput;
}
export {};
