import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { FeuillePresenceOrderByRelationAggregateInput } from 'src/models/feuille-presences/dtos/order-by.args';
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args';
import { NoteEtudiantOrderByRelationAggregateInput } from 'src/models/note-etudiants/dtos/order-by.args';
import { PaiementOrderByRelationAggregateInput } from 'src/models/paiements/dtos/order-by.args';
import { UtilisateurOrderByWithRelationInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class EtudiantOrderByWithRelationInputStrict implements RestrictProperties<EtudiantOrderByWithRelationInputStrict, Prisma.EtudiantOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    slug: Prisma.SortOrder | Prisma.SortOrderInput;
    ine: Prisma.SortOrder;
    baccaleaureat: Prisma.SortOrder | Prisma.SortOrderInput;
    anneeBaccaleaureat: Prisma.SortOrder | Prisma.SortOrderInput;
    profileId: Prisma.SortOrder;
    feuillePresencesId: Prisma.SortOrder | Prisma.SortOrderInput;
    profile: UtilisateurOrderByWithRelationInput;
    inscriptions: InscriptionOrderByRelationAggregateInput;
    notes: NoteEtudiantOrderByRelationAggregateInput;
    feuillePresences: FeuillePresenceOrderByRelationAggregateInput;
    Paiement: PaiementOrderByRelationAggregateInput;
}
declare const EtudiantOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<EtudiantOrderByWithRelationInputStrict>>;
export declare class EtudiantOrderByWithRelationInput extends EtudiantOrderByWithRelationInput_base {
}
export declare class EtudiantOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
