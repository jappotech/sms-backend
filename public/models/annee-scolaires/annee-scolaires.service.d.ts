import { FindManyAnneeScolaireArgs, FindUniqueAnneeScolaireArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAnneeScolaireInput } from './dtos/create-annee-scolaire.input';
import { UpdateAnneeScolaireInput } from './dtos/update-annee-scolaire.input';
export declare class AnneeScolairesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAnneeScolaireInput: CreateAnneeScolaireInput): import(".prisma/client").Prisma.Prisma__AnneeScolaireClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyAnneeScolaireArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }[]>;
    findAllByEtablissement(args: FindManyAnneeScolaireArgs, etablissementId: number): Promise<{
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
    update(updateAnneeScolaireInput: UpdateAnneeScolaireInput): import(".prisma/client").Prisma.Prisma__AnneeScolaireClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueAnneeScolaireArgs): import(".prisma/client").Prisma.Prisma__AnneeScolaireClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        dateDebut: number;
        dateFin: number;
        nom: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
