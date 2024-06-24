import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { DiplomeOrderByWithRelationInput } from 'src/models/diplomes/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';
export declare class InscriptionOrderByWithRelationInputStrict implements RestrictProperties<InscriptionOrderByWithRelationInputStrict, Prisma.InscriptionOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    reference: Prisma.SortOrder;
    premiereInscription: Prisma.SortOrder;
    dernierDiplome: Prisma.SortOrder | Prisma.SortOrderInput;
    autreEtablissement: Prisma.SortOrder | Prisma.SortOrderInput;
    activiteProfessionnel: Prisma.SortOrder | Prisma.SortOrderInput;
    niveau: Prisma.SortOrder | Prisma.SortOrderInput;
    statut: Prisma.SortOrder | Prisma.SortOrderInput;
    diplomeId: Prisma.SortOrder;
    etudiantId: Prisma.SortOrder;
    classeId: Prisma.SortOrder;
    diplome: DiplomeOrderByWithRelationInput;
    etudiant: EtudiantOrderByWithRelationInput;
    classe: ClasseOrderByWithRelationInput;
}
declare const InscriptionOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<InscriptionOrderByWithRelationInputStrict>>;
export declare class InscriptionOrderByWithRelationInput extends InscriptionOrderByWithRelationInput_base {
}
export declare class InscriptionOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
