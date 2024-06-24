import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args';
import { ReseauSocialOrderByRelationAggregateInput } from 'src/models/reseau-socials/dtos/order-by.args';
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class ContactOrderByWithRelationInputStrict implements RestrictProperties<ContactOrderByWithRelationInputStrict, Prisma.ContactOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    telephone: Prisma.SortOrder;
    fix: Prisma.SortOrder | Prisma.SortOrderInput;
    fax: Prisma.SortOrder | Prisma.SortOrderInput;
    email: Prisma.SortOrder;
    siteWeb: Prisma.SortOrder | Prisma.SortOrderInput;
    reseauxSociaux: ReseauSocialOrderByRelationAggregateInput;
    utilisateurs: UtilisateurOrderByRelationAggregateInput;
    etablissements: EtablissementOrderByRelationAggregateInput;
}
declare const ContactOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ContactOrderByWithRelationInputStrict>>;
export declare class ContactOrderByWithRelationInput extends ContactOrderByWithRelationInput_base {
}
export declare class ContactOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
