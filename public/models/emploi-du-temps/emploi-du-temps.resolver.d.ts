import { EmploiDuTempsService } from './emploi-du-temps.service';
import { FindManyEmploiDuTempsArgs, FindUniqueEmploiDuTempsArgs } from './dtos/find.args';
import { CreateEmploiDuTempsInput } from './dtos/create-emploi-du-temps.input';
import { UpdateEmploiDuTempsInput } from './dtos/update-emploi-du-temps.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class EmploiDuTempsResolver {
    private readonly emploiDuTempsService;
    private readonly prisma;
    constructor(emploiDuTempsService: EmploiDuTempsService, prisma: PrismaService);
    createEmploiDuTemps(args: CreateEmploiDuTempsInput, user: GetUserType): Prisma.Prisma__EmploiDuTempsClient<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyEmploiDuTempsArgs, user: GetUserType): Promise<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }[]>;
    findOne(args: FindUniqueEmploiDuTempsArgs): Prisma.Prisma__EmploiDuTempsClient<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateEmploiDuTemps(args: UpdateEmploiDuTempsInput, user: GetUserType): Promise<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }>;
    removeEmploiDuTemps(args: FindUniqueEmploiDuTempsArgs, user: GetUserType): Promise<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }>;
}
