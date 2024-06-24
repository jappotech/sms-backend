import { FindManyMatiereArgs, FindUniqueMatiereArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMatiereInput } from './dtos/create-matiere.input';
import { UpdateMatiereInput } from './dtos/update-matiere.input';
import { Prisma } from '@prisma/client';
export declare class MatieresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMatiereInput: CreateMatiereInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }>;
    findAll(args: FindManyMatiereArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }[]>;
    findAllByEtablissement(args: FindManyMatiereArgs, etablissementId: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }[]>;
    findOne(args: FindUniqueMatiereArgs): Prisma.Prisma__MatiereClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateMatiereInput: UpdateMatiereInput): Prisma.Prisma__MatiereClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueMatiereArgs): Prisma.Prisma__MatiereClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        credit: number;
        coefficient: number;
        nbHeure: number;
        uniteEnseignementId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    setNumeroMatiere(ueId: any, matiere: any): Promise<void>;
}
