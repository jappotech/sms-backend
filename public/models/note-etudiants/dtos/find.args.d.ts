import { Prisma } from '@prisma/client';
import { NoteEtudiantOrderByWithRelationInput } from './order-by.args';
import { NoteEtudiantWhereInput, NoteEtudiantWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyNoteEtudiantArgsStrict implements RestrictProperties<FindManyNoteEtudiantArgsStrict, Omit<Prisma.NoteEtudiantFindManyArgs, 'include' | 'select'>> {
    where: NoteEtudiantWhereInput;
    orderBy: NoteEtudiantOrderByWithRelationInput[];
    cursor: NoteEtudiantWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.NoteEtudiantScalarFieldEnum[];
}
declare const FindManyNoteEtudiantArgs_base: import("@nestjs/common").Type<Partial<FindManyNoteEtudiantArgsStrict>>;
export declare class FindManyNoteEtudiantArgs extends FindManyNoteEtudiantArgs_base {
}
export declare class FindUniqueNoteEtudiantArgs {
    where: NoteEtudiantWhereUniqueInput;
}
export {};
