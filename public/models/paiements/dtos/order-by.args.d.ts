import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
export declare class PaiementOrderByWithRelationInputStrict implements RestrictProperties<PaiementOrderByWithRelationInputStrict, Prisma.PaiementOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    etudiantId: Prisma.SortOrder;
    montant: Prisma.SortOrder;
    datePaiement: Prisma.SortOrder;
    methodePaiement: Prisma.SortOrder;
    referencePaiement: Prisma.SortOrder;
    typeFrais: Prisma.SortOrder;
    statutPaiement: Prisma.SortOrder;
    etudiant: EtudiantOrderByWithRelationInput;
}
declare const PaiementOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<PaiementOrderByWithRelationInputStrict>>;
export declare class PaiementOrderByWithRelationInput extends PaiementOrderByWithRelationInput_base {
}
export declare class PaiementOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
