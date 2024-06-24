import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args';
export declare class AnneeScolaireWhereUniqueInput {
    id: number;
}
export declare class AnneeScolaireWhereInputStrict implements RestrictProperties<AnneeScolaireWhereInputStrict, Prisma.AnneeScolaireWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    dateDebut: IntFilter;
    dateFin: IntFilter;
    nom: StringFilter;
    classes: ClasseListRelationFilter;
    AND: AnneeScolaireWhereInputStrict[];
    OR: AnneeScolaireWhereInputStrict[];
    NOT: AnneeScolaireWhereInputStrict[];
}
declare const AnneeScolaireWhereInput_base: import("@nestjs/common").Type<Partial<AnneeScolaireWhereInputStrict>>;
export declare class AnneeScolaireWhereInput extends AnneeScolaireWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    dateDebut: IntFilter;
    dateFin: IntFilter;
    nom: StringFilter;
    classes: ClasseListRelationFilter;
    AND: AnneeScolaireWhereInput[];
    OR: AnneeScolaireWhereInput[];
    NOT: AnneeScolaireWhereInput[];
}
export declare class AnneeScolaireListRelationFilter {
    every?: AnneeScolaireWhereInput;
    some?: AnneeScolaireWhereInput;
    none?: AnneeScolaireWhereInput;
}
export declare class AnneeScolaireRelationFilter {
    is?: AnneeScolaireWhereInput;
    isNot?: AnneeScolaireWhereInput;
}
export {};
