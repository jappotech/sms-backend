import { NoteEtudiantsService } from './note-etudiants.service';
import { NoteEtudiant } from './entity/note-etudiant.entity';
import { FindManyNoteEtudiantArgs, FindUniqueNoteEtudiantArgs } from './dtos/find.args';
import { CreateNoteEtudiantInput } from './dtos/create-note-etudiant.input';
import { UpdateNoteEtudiantInput } from './dtos/update-note-etudiant.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class NoteEtudiantsResolver {
    private readonly noteEtudiantsService;
    private readonly prisma;
    constructor(noteEtudiantsService: NoteEtudiantsService, prisma: PrismaService);
    createNoteEtudiant(args: CreateNoteEtudiantInput, user: GetUserType): Prisma.Prisma__NoteEtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyNoteEtudiantArgs, user: GetUserType): Promise<{
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
    updateNoteEtudiant(args: UpdateNoteEtudiantInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }>;
    removeNoteEtudiant(args: FindUniqueNoteEtudiantArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }>;
    etudiant(parent: NoteEtudiant): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }>;
    evaluation(parent: NoteEtudiant): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        typeEvaluation: import(".prisma/client").$Enums.TypeEvaluation;
        dateEvaluation: Date;
        duree: number;
        document: string;
        description: string;
        coursId: number;
    }>;
}
