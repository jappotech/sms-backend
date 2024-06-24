import { AnneeScolairesService } from './annee-scolaires.service';
import { FindManyAnneeScolaireArgs, FindUniqueAnneeScolaireArgs } from './dtos/find.args';
import { CreateAnneeScolaireInput } from './dtos/create-annee-scolaire.input';
import { UpdateAnneeScolaireInput } from './dtos/update-annee-scolaire.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class AnneeScolairesResolver {
    private readonly anneeScolairesService;
    private readonly prisma;
    constructor(anneeScolairesService: AnneeScolairesService, prisma: PrismaService);
    createAnneeScolaire(args: CreateAnneeScolaireInput, user: GetUserType): import(".prisma/client").Prisma.Prisma__AnneeScolaireClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyAnneeScolaireArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }[]>;
    findOne(args: FindUniqueAnneeScolaireArgs): import(".prisma/client").Prisma.Prisma__AnneeScolaireClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateAnneeScolaire(args: UpdateAnneeScolaireInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }>;
    removeAnneeScolaire(args: FindUniqueAnneeScolaireArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }>;
}
