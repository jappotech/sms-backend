import { EtablissementsService } from './etablissements.service';
import { Etablissement } from './entity/etablissement.entity';
import { FindManyEtablissementArgs, FindUniqueEtablissementArgs } from './dtos/find.args';
import { CreateEtablissementInput } from './dtos/create-etablissement.input';
import { UpdateEtablissementInput } from './dtos/update-etablissement.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class EtablissementsResolver {
    private readonly etablissementsService;
    private readonly prisma;
    constructor(etablissementsService: EtablissementsService, prisma: PrismaService);
    createEtablissement(args: CreateEtablissementInput, user: GetUserType): Promise<{
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
    findAll(args: FindManyEtablissementArgs, user: GetUserType): Promise<{
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
    updateEtablissement(args: UpdateEtablissementInput, user: GetUserType): Promise<{
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
    removeEtablissement(args: FindUniqueEtablissementArgs, user: GetUserType): Promise<{
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
    domaines(parent: Etablissement): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }[]>;
    adresse(parent: Etablissement): Promise<{}>;
    contact(parent: Etablissement): Promise<{}>;
}
