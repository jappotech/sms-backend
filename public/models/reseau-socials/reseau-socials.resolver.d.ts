import { ReseauSocialsService } from './reseau-socials.service';
import { FindManyReseauSocialArgs, FindUniqueReseauSocialArgs } from './dtos/find.args';
import { CreateReseauSocialInput } from './dtos/create-reseau-social.input';
import { UpdateReseauSocialInput } from './dtos/update-reseau-social.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ReseauSocialsResolver {
    private readonly reseauSocialsService;
    private readonly prisma;
    constructor(reseauSocialsService: ReseauSocialsService, prisma: PrismaService);
    createReseauSocial(args: CreateReseauSocialInput, user: GetUserType): Prisma.Prisma__ReseauSocialClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyReseauSocialArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }[]>;
    findOne(args: FindUniqueReseauSocialArgs): Prisma.Prisma__ReseauSocialClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateReseauSocial(args: UpdateReseauSocialInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }>;
    removeReseauSocial(args: FindUniqueReseauSocialArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }>;
}
