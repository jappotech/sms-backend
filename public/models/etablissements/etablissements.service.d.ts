import { FindManyEtablissementArgs, FindUniqueEtablissementArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEtablissementInput } from './dtos/create-etablissement.input';
import { UpdateEtablissementInput } from './dtos/update-etablissement.input';
import { Prisma } from '@prisma/client';
export declare class EtablissementsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEtablissementInput: CreateEtablissementInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        matricule: string;
        sigle: string;
        dateCreation: Date;
        logo: string;
        anneeEnCours: string;
        adresseId: number;
        contactId: number;
    }>;
    findAll(args: FindManyEtablissementArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        matricule: string;
        sigle: string;
        dateCreation: Date;
        logo: string;
        anneeEnCours: string;
        adresseId: number;
        contactId: number;
    }[]>;
    findOne(args: FindUniqueEtablissementArgs): Prisma.Prisma__EtablissementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        matricule: string;
        sigle: string;
        dateCreation: Date;
        logo: string;
        anneeEnCours: string;
        adresseId: number;
        contactId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateEtablissementInput: UpdateEtablissementInput): Prisma.Prisma__EtablissementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        matricule: string;
        sigle: string;
        dateCreation: Date;
        logo: string;
        anneeEnCours: string;
        adresseId: number;
        contactId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueEtablissementArgs): Prisma.Prisma__EtablissementClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        matricule: string;
        sigle: string;
        dateCreation: Date;
        logo: string;
        anneeEnCours: string;
        adresseId: number;
        contactId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
