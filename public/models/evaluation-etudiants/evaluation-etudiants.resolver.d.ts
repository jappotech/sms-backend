import { EvaluationEtudiantsService } from './evaluation-etudiants.service';
import { EvaluationEtudiants } from './entity/evaluation-etudiants.entity';
import { FindManyEvaluationEtudiantsArgs, FindUniqueEvaluationEtudiantsArgs } from './dtos/find.args';
import { CreateEvaluationEtudiantsInput } from './dtos/create-evaluation-etudiants.input';
import { UpdateEvaluationEtudiantsInput } from './dtos/update-evaluation-etudiants.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class EvaluationEtudiantsResolver {
    private readonly evaluationEtudiantsService;
    private readonly prisma;
    constructor(evaluationEtudiantsService: EvaluationEtudiantsService, prisma: PrismaService);
    createEvaluationEtudiants(args: CreateEvaluationEtudiantsInput, user: GetUserType): Prisma.Prisma__EvaluationEtudiantsClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        typeEvaluation: import(".prisma/client").$Enums.TypeEvaluation;
        dateEvaluation: Date;
        duree: number;
        document: string;
        description: string;
        coursId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyEvaluationEtudiantsArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        typeEvaluation: import(".prisma/client").$Enums.TypeEvaluation;
        dateEvaluation: Date;
        duree: number;
        document: string;
        description: string;
        coursId: number;
    }[]>;
    findOne(args: FindUniqueEvaluationEtudiantsArgs): Prisma.Prisma__EvaluationEtudiantsClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        typeEvaluation: import(".prisma/client").$Enums.TypeEvaluation;
        dateEvaluation: Date;
        duree: number;
        document: string;
        description: string;
        coursId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateEvaluationEtudiants(args: UpdateEvaluationEtudiantsInput, user: GetUserType): Promise<{
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
    removeEvaluationEtudiants(args: FindUniqueEvaluationEtudiantsArgs, user: GetUserType): Promise<{
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
    NoteEtudiant(parent: EvaluationEtudiants): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        note: number;
        evaluationEtudiantId: number;
        etudiantId: number;
    }[]>;
    Cours(parent: EvaluationEtudiants): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        description: string;
        dateDebut: Date;
        dateFin: Date;
        heureDebut: Date;
        heureFin: Date;
        matiereId: number;
        salleId: number;
        classeId: number;
        professeurId: number;
    }>;
}
