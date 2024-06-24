import { FindManyClasseArgs, FindUniqueClasseArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateClasseInput } from './dtos/create-classe.input';
import { UpdateClasseInput } from './dtos/update-classe.input';
export declare class ClassesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClasseInput: CreateClasseInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }>;
    findAll(args: FindManyClasseArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }[]>;
    findAllByEtablissement(args: FindManyClasseArgs, etablissementId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }[]>;
    findOne(args: FindUniqueClasseArgs): import(".prisma/client").Prisma.Prisma__ClasseClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateClasseInput: UpdateClasseInput): import(".prisma/client").Prisma.Prisma__ClasseClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueClasseArgs): import(".prisma/client").Prisma.Prisma__ClasseClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
