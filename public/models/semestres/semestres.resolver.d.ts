import { SemestresService } from './semestres.service';
import { Semestre } from './entity/semestre.entity';
import { FindManySemestreArgs, FindUniqueSemestreArgs } from './dtos/find.args';
import { CreateSemestreInput } from './dtos/create-semestre.input';
import { UpdateSemestreInput } from './dtos/update-semestre.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SemestresResolver {
    private readonly semestresService;
    private readonly prisma;
    constructor(semestresService: SemestresService, prisma: PrismaService);
    createSemestre(args: CreateSemestreInput, user: GetUserType): Prisma.Prisma__SemestreClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManySemestreArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    }[]>;
    findOne(args: FindUniqueSemestreArgs): Prisma.Prisma__SemestreClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateSemestre(args: UpdateSemestreInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    }>;
    removeSemestre(args: FindUniqueSemestreArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    }>;
    uniteEnseignements(parent: Semestre): Promise<({
        matieres: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            nom: string;
            credit: number;
            coefficient: number;
            nbHeure: number;
            uniteEnseignementId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        nom: string;
        numero: number;
        credit: number;
        semestreId: number;
    })[]>;
}
