import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args';
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class AdresseOrderByWithRelationInputStrict implements RestrictProperties<AdresseOrderByWithRelationInputStrict, Prisma.AdresseOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    pays: Prisma.SortOrder;
    region: Prisma.SortOrder;
    ville: Prisma.SortOrder;
    codePostal: Prisma.SortOrder | Prisma.SortOrderInput;
    geolocalisation: Prisma.SortOrder | Prisma.SortOrderInput;
    utilisateurs: UtilisateurOrderByRelationAggregateInput;
    etablissements: EtablissementOrderByRelationAggregateInput;
}
declare const AdresseOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<AdresseOrderByWithRelationInputStrict>>;
export declare class AdresseOrderByWithRelationInput extends AdresseOrderByWithRelationInput_base {
}
export declare class AdresseOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
