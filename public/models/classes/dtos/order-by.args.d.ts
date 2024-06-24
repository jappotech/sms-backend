import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AnneeScolaireOrderByWithRelationInput } from 'src/models/annee-scolaires/dtos/order-by.args';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args';
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args';
import { SemestreOrderByRelationAggregateInput } from 'src/models/semestres/dtos/order-by.args';
import { SpecialiteOrderByWithRelationInput } from 'src/models/specialites/dtos/order-by.args';
export declare class ClasseOrderByWithRelationInputStrict implements RestrictProperties<ClasseOrderByWithRelationInputStrict, Prisma.ClasseOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    createdAt: Prisma.SortOrder;
    updatedAt: Prisma.SortOrder;
    nom: Prisma.SortOrder;
    code: Prisma.SortOrder;
    niveau: Prisma.SortOrder;
    anneeScolaireId: Prisma.SortOrder;
    AnneeScolaire: AnneeScolaireOrderByWithRelationInput;
    etablissementId: Prisma.SortOrder;
    specialiteId: Prisma.SortOrder;
    etablissement: EtablissementOrderByWithRelationInput;
    semestres: SemestreOrderByRelationAggregateInput;
    inscriptions: InscriptionOrderByRelationAggregateInput;
    specialite: SpecialiteOrderByWithRelationInput;
    Cours: CoursOrderByRelationAggregateInput;
    EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}
declare const ClasseOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ClasseOrderByWithRelationInputStrict>>;
export declare class ClasseOrderByWithRelationInput extends ClasseOrderByWithRelationInput_base {
}
export declare class ClasseOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
