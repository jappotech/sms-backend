import { FindManyEvaluationEtudiantsArgs, FindUniqueEvaluationEtudiantsArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEvaluationEtudiantsInput } from './dtos/create-evaluation-etudiants.input';
import { UpdateEvaluationEtudiantsInput } from './dtos/update-evaluation-etudiants.input';
import { Prisma } from '@prisma/client';
export declare class EvaluationEtudiantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEvaluationEtudiantsInput: CreateEvaluationEtudiantsInput): Prisma.Prisma__EvaluationEtudiantsClient<{
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
    findAll(args: FindManyEvaluationEtudiantsArgs): Prisma.PrismaPromise<{
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
    findAllByEtablissement(args: FindManyEvaluationEtudiantsArgs, id: number): Prisma.PrismaPromise<{
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
    update(updateEvaluationEtudiantsInput: UpdateEvaluationEtudiantsInput): Prisma.Prisma__EvaluationEtudiantsClient<{
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
    remove(args: FindUniqueEvaluationEtudiantsArgs): Prisma.Prisma__EvaluationEtudiantsClient<{
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
}
