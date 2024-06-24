import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args';
import { SpecialiteOrderByWithRelationInput } from 'src/models/specialites/dtos/order-by.args';
export declare class DiplomeOrderByWithRelationInputStrict implements RestrictProperties<DiplomeOrderByWithRelationInputStrict, Prisma.DiplomeOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    finalite: Prisma.SortOrder;
    entite: Prisma.SortOrder;
    habilitation: Prisma.SortOrder;
    partenaires: Prisma.SortOrder;
    dateCreation: Prisma.SortOrder;
    dateHabilitation: Prisma.SortOrder;
    dateEcheance: Prisma.SortOrder;
    duree: Prisma.SortOrder;
    specialiteId: Prisma.SortOrder | Prisma.SortOrderInput;
    inscriptions: InscriptionOrderByRelationAggregateInput;
    specialite: SpecialiteOrderByWithRelationInput;
}
declare const DiplomeOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<DiplomeOrderByWithRelationInputStrict>>;
export declare class DiplomeOrderByWithRelationInput extends DiplomeOrderByWithRelationInput_base {
}
export declare class DiplomeOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
