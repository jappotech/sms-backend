import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';
import { SalleOrderByWithRelationInput } from 'src/models/salles/dtos/order-by.args';
export declare class EmploiDuTempsOrderByWithRelationInputStrict implements RestrictProperties<EmploiDuTempsOrderByWithRelationInputStrict, Prisma.EmploiDuTempsOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    coursId: Prisma.SortOrder;
    classeId: Prisma.SortOrder;
    professeurId: Prisma.SortOrder | Prisma.SortOrderInput;
    salleId: Prisma.SortOrder;
    dateDebut: Prisma.SortOrder;
    dateFin: Prisma.SortOrder;
    cours: CoursOrderByWithRelationInput;
    classe: ClasseOrderByWithRelationInput;
    professeur: ProfesseurOrderByWithRelationInput;
    salle: SalleOrderByWithRelationInput;
}
declare const EmploiDuTempsOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<EmploiDuTempsOrderByWithRelationInputStrict>>;
export declare class EmploiDuTempsOrderByWithRelationInput extends EmploiDuTempsOrderByWithRelationInput_base {
}
export declare class EmploiDuTempsOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
