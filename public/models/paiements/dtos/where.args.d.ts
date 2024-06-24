import { Prisma } from '@prisma/client';
import { DateTimeFilter, FloatFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';
export declare class PaiementWhereUniqueInput {
    id: number;
}
export declare class PaiementWhereInputStrict implements RestrictProperties<PaiementWhereInputStrict, Prisma.PaiementWhereInput> {
    id: IntFilter;
    etudiantId: IntFilter;
    montant: FloatFilter;
    datePaiement: DateTimeFilter;
    methodePaiement: StringFilter;
    referencePaiement: StringFilter;
    typeFrais: StringFilter;
    statutPaiement: StringFilter;
    etudiant: EtudiantRelationFilter;
    AND: PaiementWhereInput[];
    OR: PaiementWhereInput[];
    NOT: PaiementWhereInput[];
}
declare const PaiementWhereInput_base: import("@nestjs/common").Type<Partial<PaiementWhereInputStrict>>;
export declare class PaiementWhereInput extends PaiementWhereInput_base {
    id: IntFilter;
    etudiantId: IntFilter;
    montant: FloatFilter;
    datePaiement: DateTimeFilter;
    methodePaiement: StringFilter;
    referencePaiement: StringFilter;
    typeFrais: StringFilter;
    statutPaiement: StringFilter;
    etudiant: EtudiantRelationFilter;
    AND: PaiementWhereInput[];
    OR: PaiementWhereInput[];
    NOT: PaiementWhereInput[];
}
export declare class PaiementListRelationFilter {
    every?: PaiementWhereInput;
    some?: PaiementWhereInput;
    none?: PaiementWhereInput;
}
export declare class PaiementRelationFilter {
    is?: PaiementWhereInput;
    isNot?: PaiementWhereInput;
}
export {};
