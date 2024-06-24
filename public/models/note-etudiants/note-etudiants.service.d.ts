import { FindManyNoteEtudiantArgs, FindUniqueNoteEtudiantArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateNoteEtudiantInput } from './dtos/create-note-etudiant.input';
import { UpdateNoteEtudiantInput } from './dtos/update-note-etudiant.input';
import { Prisma } from '@prisma/client';
export declare class NoteEtudiantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createNoteEtudiantInput: CreateNoteEtudiantInput): Prisma.Prisma__NoteEtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyNoteEtudiantArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }[]>;
    findAllByEtablissement(args: FindManyNoteEtudiantArgs, id: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }[]>;
    findOne(args: FindUniqueNoteEtudiantArgs): Prisma.Prisma__NoteEtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateNoteEtudiantInput: UpdateNoteEtudiantInput): Prisma.Prisma__NoteEtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueNoteEtudiantArgs): Prisma.Prisma__NoteEtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
