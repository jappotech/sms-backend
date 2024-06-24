import { FindManySalleArgs, FindUniqueSalleArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateSalleInput } from './dtos/create-salle.input';
import { UpdateSalleInput } from './dtos/update-salle.input';
import { Prisma } from '@prisma/client';
export declare class SallesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSalleInput: CreateSalleInput): Prisma.Prisma__SalleClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManySalleArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }[]>;
    findAllByEtablissement(args: FindManySalleArgs, etablissementId: number): Prisma.PrismaPromise<{
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
    update(updateSalleInput: UpdateSalleInput): Prisma.Prisma__SalleClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueSalleArgs): Prisma.Prisma__SalleClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        capacite: number;
        batiment: string;
        etablissementId: number;
        estDisponible: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
