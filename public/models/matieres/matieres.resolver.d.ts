import { MatieresService } from './matieres.service';
import { Matiere } from './entity/matiere.entity';
import { FindManyMatiereArgs, FindUniqueMatiereArgs } from './dtos/find.args';
import { CreateMatiereInput } from './dtos/create-matiere.input';
import { UpdateMatiereInput } from './dtos/update-matiere.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class MatieresResolver {
    private readonly matieresService;
    private readonly prisma;
    constructor(matieresService: MatieresService, prisma: PrismaService);
    createMatiere(args: CreateMatiereInput, user: GetUserType): Promise<{
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
    findAll(args: FindManyMatiereArgs, user: GetUserType): Promise<{
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
    findOne(args: FindUniqueMatiereArgs): import(".prisma/client").Prisma.Prisma__MatiereClient<{
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
    updateMatiere(args: UpdateMatiereInput, user: GetUserType): Promise<{
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
    removeMatiere(args: FindUniqueMatiereArgs, user: GetUserType): Promise<{
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
    uniteEnseignement(parent: Matiere): Promise<{}>;
}
