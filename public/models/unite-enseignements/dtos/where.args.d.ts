import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { MatiereListRelationFilter } from 'src/models/matieres/dtos/where.args';
import { SemestreRelationFilter } from 'src/models/semestres/dtos/where.args';
export declare class UniteEnseignementWhereUniqueInput {
    id: number;
}
export declare class UniteEnseignementWhereInputStrict implements RestrictProperties<UniteEnseignementWhereInputStrict, Prisma.UniteEnseignementWhereInput> {
    id: IntFilter;
    createdAt: StringFilter;
    updatedAt: DateTimeFilter;
    code: StringFilter;
    nom: StringFilter;
    credit: IntFilter;
    numero: IntFilter;
    semestreId: IntFilter;
    semestre: SemestreRelationFilter;
    matieres: MatiereListRelationFilter;
    AND: UniteEnseignementWhereInputStrict[];
    OR: UniteEnseignementWhereInputStrict[];
    NOT: UniteEnseignementWhereInputStrict[];
}
declare const UniteEnseignementWhereInput_base: import("@nestjs/common").Type<Partial<UniteEnseignementWhereInputStrict>>;
export declare class UniteEnseignementWhereInput extends UniteEnseignementWhereInput_base {
    id: IntFilter;
    createdAt: StringFilter;
    updatedAt: DateTimeFilter;
    code: StringFilter;
    nom: StringFilter;
    credit: IntFilter;
    numero: IntFilter;
    semestreId: IntFilter;
    semestre: SemestreRelationFilter;
    matieres: MatiereListRelationFilter;
    AND: UniteEnseignementWhereInput[];
    OR: UniteEnseignementWhereInput[];
    NOT: UniteEnseignementWhereInput[];
}
export declare class UniteEnseignementListRelationFilter {
    every?: UniteEnseignementWhereInput;
    some?: UniteEnseignementWhereInput;
    none?: UniteEnseignementWhereInput;
}
export declare class UniteEnseignementRelationFilter {
    is?: UniteEnseignementWhereInput;
    isNot?: UniteEnseignementWhereInput;
}
export {};
