import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { UtilisateurOrderByWithRelationInput } from 'src/models/utilisateurs/dtos/order-by.args';
export declare class ProfesseurOrderByWithRelationInputStrict implements RestrictProperties<ProfesseurOrderByWithRelationInputStrict, Prisma.ProfesseurOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    profileId: Prisma.SortOrder;
    profile: UtilisateurOrderByWithRelationInput;
    cours: CoursOrderByRelationAggregateInput;
    EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}
declare const ProfesseurOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ProfesseurOrderByWithRelationInputStrict>>;
export declare class ProfesseurOrderByWithRelationInput extends ProfesseurOrderByWithRelationInput_base {
}
export declare class ProfesseurOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
