import { DomainesService } from './domaines.service';
import { Domaine } from './entity/domaine.entity';
import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args';
import { CreateDomaineInput } from './dtos/create-domaine.input';
import { UpdateDomaineInput } from './dtos/update-domaine.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class DomainesResolver {
    private readonly domainesService;
    private readonly prisma;
    constructor(domainesService: DomainesService, prisma: PrismaService);
    createDomaine(args: CreateDomaineInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }>;
    findAll(args: FindManyDomaineArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }[]>;
    findAllByEtablissement(args: FindManyDomaineArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }[]>;
    findOne(args: FindUniqueDomaineArgs): Prisma.Prisma__DomaineClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateDomaine(args: UpdateDomaineInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }>;
    removeDomaine(args: FindUniqueDomaineArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }>;
    mentions(parent: Domaine, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }[]>;
}
