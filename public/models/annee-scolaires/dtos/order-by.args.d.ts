import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args';
export declare class AnneeScolaireOrderByWithRelationInputStrict implements RestrictProperties<AnneeScolaireOrderByWithRelationInputStrict, Prisma.AnneeScolaireOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    dateDebut: Prisma.SortOrder;
    dateFin: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    classes: ClasseOrderByRelationAggregateInput;
}
declare const AnneeScolaireOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<AnneeScolaireOrderByWithRelationInputStrict>>;
export declare class AnneeScolaireOrderByWithRelationInput extends AnneeScolaireOrderByWithRelationInput_base {
}
export declare class AnneeScolaireOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
