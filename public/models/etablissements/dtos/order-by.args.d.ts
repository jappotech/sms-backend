import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AdresseOrderByWithRelationInput } from 'src/models/adresses/dtos/order-by.args';
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args';
import { ContactOrderByWithRelationInput } from 'src/models/contacts/dtos/order-by.args';
import { DomaineOrderByRelationAggregateInput } from 'src/models/domaines/dtos/order-by.args';
import { SalleOrderByRelationAggregateInput } from 'src/models/salles/dtos/order-by.args';
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class EtablissementOrderByWithRelationInputStrict implements RestrictProperties<EtablissementOrderByWithRelationInputStrict, Prisma.EtablissementOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    matricule: Prisma.SortOrder | Prisma.SortOrderInput;
    sigle: Prisma.SortOrder | Prisma.SortOrderInput;
    dateCreation: Prisma.SortOrder | Prisma.SortOrderInput;
    logo: Prisma.SortOrder | Prisma.SortOrderInput;
    anneeEnCours: Prisma.SortOrder | Prisma.SortOrderInput;
    adresseId: Prisma.SortOrder | Prisma.SortOrderInput;
    contactId: Prisma.SortOrder | Prisma.SortOrderInput;
    adresse: AdresseOrderByWithRelationInput;
    contact: ContactOrderByWithRelationInput;
    utilisateurs: UtilisateurOrderByRelationAggregateInput;
    domaines: DomaineOrderByRelationAggregateInput;
    classes: ClasseOrderByRelationAggregateInput;
    salle: SalleOrderByRelationAggregateInput;
}
declare const EtablissementOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<EtablissementOrderByWithRelationInputStrict>>;
export declare class EtablissementOrderByWithRelationInput extends EtablissementOrderByWithRelationInput_base {
}
export declare class EtablissementOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
