import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { UniteEnseignementOrderByRelationAggregateInput } from 'src/models/unite-enseignements/dtos/order-by.args';
export declare class SemestreOrderByWithRelationInputStrict implements RestrictProperties<SemestreOrderByWithRelationInputStrict, Prisma.SemestreOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    numero: Prisma.SortOrder;
    grade: Prisma.SortOrder;
    dateDebut: Prisma.SortOrder;
    dateFin: Prisma.SortOrder;
    nombreSemaine: Prisma.SortOrder;
    etablissementId: Prisma.SortOrder;
    classeId: Prisma.SortOrder | Prisma.SortOrderInput;
    uniteEnseignement: UniteEnseignementOrderByRelationAggregateInput;
    Classe: ClasseOrderByWithRelationInput;
}
declare const SemestreOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<SemestreOrderByWithRelationInputStrict>>;
export declare class SemestreOrderByWithRelationInput extends SemestreOrderByWithRelationInput_base {
}
export declare class SemestreOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
