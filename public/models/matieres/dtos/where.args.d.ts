import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { UniteEnseignementRelationFilter } from 'src/models/unite-enseignements/dtos/where.args';
export declare class MatiereWhereUniqueInput {
    id: number;
}
export declare class MatiereWhereInputStrict implements RestrictProperties<MatiereWhereInputStrict, Prisma.MatiereWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    code: StringFilter;
    nom: StringFilter;
    credit: IntFilter;
    coefficient: IntFilter;
    nbHeure: IntFilter;
    uniteEnseignementId: IntFilter;
    cours: CoursListRelationFilter;
    uniteEnseignement: UniteEnseignementRelationFilter;
    AND: MatiereWhereInputStrict[];
    OR: MatiereWhereInputStrict[];
    NOT: MatiereWhereInputStrict[];
}
declare const MatiereWhereInput_base: import("@nestjs/common").Type<Partial<MatiereWhereInputStrict>>;
export declare class MatiereWhereInput extends MatiereWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    code: StringFilter;
    nom: StringFilter;
    credit: IntFilter;
    coefficient: IntFilter;
    nbHeure: IntFilter;
    uniteEnseignementId: IntFilter;
    cours: CoursListRelationFilter;
    uniteEnseignement: UniteEnseignementRelationFilter;
    AND: MatiereWhereInput[];
    OR: MatiereWhereInput[];
    NOT: MatiereWhereInput[];
}
export declare class MatiereListRelationFilter {
    every?: MatiereWhereInput;
    some?: MatiereWhereInput;
    none?: MatiereWhereInput;
}
export declare class MatiereRelationFilter {
    is?: MatiereWhereInput;
    isNot?: MatiereWhereInput;
}
export {};
