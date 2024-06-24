import { FindManyProfesseurArgs, FindUniqueProfesseurArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateProfesseurInput } from './dtos/create-professeur.input';
import { UpdateProfesseurInput } from './dtos/update-professeur.input';
import { Prisma } from '@prisma/client';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
export declare class ProfesseursService {
    private readonly prisma;
    private readonly utilisateurService;
    constructor(prisma: PrismaService, utilisateurService: UtilisateursService);
    create(createProfesseurInput: CreateProfesseurInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }>;
    findAll(args: FindManyProfesseurArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }[]>;
    findAllByEtablissement(args: FindManyProfesseurArgs, id: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }[]>;
    findOne(args: FindUniqueProfesseurArgs): Prisma.Prisma__ProfesseurClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateProfesseurInput: UpdateProfesseurInput): Prisma.Prisma__ProfesseurClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueProfesseurArgs): Prisma.Prisma__ProfesseurClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
