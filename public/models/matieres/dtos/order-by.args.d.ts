import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { UniteEnseignementOrderByWithRelationInput } from 'src/models/unite-enseignements/dtos/order-by.args';
export declare class MatiereOrderByWithRelationInputStrict implements RestrictProperties<MatiereOrderByWithRelationInputStrict, Prisma.MatiereOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    code: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    credit: Prisma.SortOrder;
    coefficient: Prisma.SortOrder;
    nbHeure: Prisma.SortOrder | Prisma.SortOrderInput;
    uniteEnseignementId: Prisma.SortOrder;
    cours: CoursOrderByRelationAggregateInput;
    uniteEnseignement: UniteEnseignementOrderByWithRelationInput;
}
declare const MatiereOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<MatiereOrderByWithRelationInputStrict>>;
export declare class MatiereOrderByWithRelationInput extends MatiereOrderByWithRelationInput_base {
}
export declare class MatiereOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
