import { SallesService } from './salles.service';
import { FindManySalleArgs, FindUniqueSalleArgs } from './dtos/find.args';
import { CreateSalleInput } from './dtos/create-salle.input';
import { UpdateSalleInput } from './dtos/update-salle.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SallesResolver {
    private readonly sallesService;
    private readonly prisma;
    constructor(sallesService: SallesService, prisma: PrismaService);
    createSalle(args: CreateSalleInput, user: GetUserType): Prisma.Prisma__SalleClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManySalleArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }[]>;
    findOne(args: FindUniqueSalleArgs): Prisma.Prisma__SalleClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateSalle(args: UpdateSalleInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }>;
    removeSalle(args: FindUniqueSalleArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }>;
}
