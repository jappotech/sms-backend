import { ProfesseursService } from './professeurs.service';
import { Professeur } from './entity/professeur.entity';
import { FindManyProfesseurArgs, FindUniqueProfesseurArgs } from './dtos/find.args';
import { CreateProfesseurInput } from './dtos/create-professeur.input';
import { UpdateProfesseurInput } from './dtos/update-professeur.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProfesseursResolver {
    private readonly professeursService;
    private readonly prisma;
    constructor(professeursService: ProfesseursService, prisma: PrismaService);
    createProfesseur(args: CreateProfesseurInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }>;
    findAll(args: FindManyProfesseurArgs, user: GetUserType): Promise<{
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
    updateProfesseur(args: UpdateProfesseurInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }>;
    removeProfesseur(args: FindUniqueProfesseurArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        profileId: number;
    }>;
    profile(parent: Professeur): Promise<{}>;
}
