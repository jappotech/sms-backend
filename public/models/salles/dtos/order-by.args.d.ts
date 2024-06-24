import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args';
export declare class SalleOrderByWithRelationInputStrict implements RestrictProperties<SalleOrderByWithRelationInputStrict, Prisma.SalleOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    capacite: Prisma.SortOrder | Prisma.SortOrderInput;
    batiment: Prisma.SortOrder | Prisma.SortOrderInput;
    etablissementId: Prisma.SortOrder;
    estDisponible: Prisma.SortOrder;
    etablissement: EtablissementOrderByWithRelationInput;
    cours: CoursOrderByRelationAggregateInput;
    EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}
declare const SalleOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<SalleOrderByWithRelationInputStrict>>;
export declare class SalleOrderByWithRelationInput extends SalleOrderByWithRelationInput_base {
}
export declare class SalleOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
