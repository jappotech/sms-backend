import { FindManyUniteEnseignementArgs, FindUniqueUniteEnseignementArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import { UniteEnseignement } from '@prisma/client';
export declare class UniteEnseignementsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUniteEnseignementInput: CreateUniteEnseignementInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }>;
    findAll(args: FindManyUniteEnseignementArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }[]>;
    findAllByEtablissement(args: FindManyUniteEnseignementArgs, etablissementId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }[]>;
    findOne(args: FindUniqueUniteEnseignementArgs): import(".prisma/client").Prisma.Prisma__UniteEnseignementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateUniteEnseignementInput: UpdateUniteEnseignementInput): import(".prisma/client").Prisma.Prisma__UniteEnseignementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueUniteEnseignementArgs): import(".prisma/client").Prisma.Prisma__UniteEnseignementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    genererCodeUE(id: number): Promise<string>;
    getNumeroAnnee(numeroSemestre: number): number;
    setNumeroUe(semestreId: number, newUe: UniteEnseignement): Promise<void>;
}
