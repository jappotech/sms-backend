import { FindManyEmploiDuTempsArgs, FindUniqueEmploiDuTempsArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEmploiDuTempsInput } from './dtos/create-emploi-du-temps.input';
import { UpdateEmploiDuTempsInput } from './dtos/update-emploi-du-temps.input';
import { Prisma } from '@prisma/client';
export declare class EmploiDuTempsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEmploiDuTempsInput: CreateEmploiDuTempsInput): Prisma.Prisma__EmploiDuTempsClient<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyEmploiDuTempsArgs): Prisma.PrismaPromise<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }[]>;
    findAllByEtablissement(args: FindManyEmploiDuTempsArgs, etablissementId: number): Prisma.PrismaPromise<{
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
    update(updateEmploiDuTempsInput: UpdateEmploiDuTempsInput): Prisma.Prisma__EmploiDuTempsClient<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueEmploiDuTempsArgs): Prisma.Prisma__EmploiDuTempsClient<{
        id: number;
        coursId: number;
        classeId: number;
        professeurId: number;
        salleId: number;
        dateDebut: Date;
        dateFin: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
