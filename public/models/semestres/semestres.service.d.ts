import { FindManySemestreArgs, FindUniqueSemestreArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateSemestreInput } from './dtos/create-semestre.input';
import { UpdateSemestreInput } from './dtos/update-semestre.input';
import { Prisma } from '@prisma/client';
export declare class SemestresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSemestreInput: CreateSemestreInput): Prisma.Prisma__SemestreClient<{
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
    findAll(args: FindManySemestreArgs): Prisma.PrismaPromise<{
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
    findAllByEtablissement(args: FindManySemestreArgs, etablissementId: number): Prisma.PrismaPromise<{
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
    update(updateSemestreInput: UpdateSemestreInput): Prisma.Prisma__SemestreClient<{
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
    remove(args: FindUniqueSemestreArgs): Prisma.Prisma__SemestreClient<{
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
}
