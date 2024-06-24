import { UniteEnseignementsService } from './unite-enseignements.service';
import { UniteEnseignement } from './entity/unite-enseignement.entity';
import { FindManyUniteEnseignementArgs, FindUniqueUniteEnseignementArgs } from './dtos/find.args';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UniteEnseignementsResolver {
    private readonly uniteEnseignementsService;
    private readonly prisma;
    constructor(uniteEnseignementsService: UniteEnseignementsService, prisma: PrismaService);
    createUniteEnseignement(args: CreateUniteEnseignementInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }>;
    findAll(args: FindManyUniteEnseignementArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }[]>;
    findOne(args: FindUniqueUniteEnseignementArgs): Prisma.Prisma__UniteEnseignementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateUniteEnseignement(args: UpdateUniteEnseignementInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }>;
    genererCodeUniteEnseignement(args: UpdateUniteEnseignementInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }>;
    removeUniteEnseignement(args: FindUniqueUniteEnseignementArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }>;
    matieres(parent: UniteEnseignement): Promise<{
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
}
