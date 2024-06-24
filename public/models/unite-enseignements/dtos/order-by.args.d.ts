import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { MatiereOrderByRelationAggregateInput } from 'src/models/matieres/dtos/order-by.args';
import { SemestreOrderByWithRelationInput } from 'src/models/semestres/dtos/order-by.args';
export declare class UniteEnseignementOrderByWithRelationInputStrict implements RestrictProperties<UniteEnseignementOrderByWithRelationInputStrict, Prisma.UniteEnseignementOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    code: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    credit: Prisma.SortOrder;
    numero: Prisma.SortOrder;
    semestreId: Prisma.SortOrder | Prisma.SortOrderInput;
    semestre: SemestreOrderByWithRelationInput;
    matieres: MatiereOrderByRelationAggregateInput;
}
declare const UniteEnseignementOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<UniteEnseignementOrderByWithRelationInputStrict>>;
export declare class UniteEnseignementOrderByWithRelationInput extends UniteEnseignementOrderByWithRelationInput_base {
}
export declare class UniteEnseignementOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
