import { FindManyReseauSocialArgs, FindUniqueReseauSocialArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateReseauSocialInput } from './dtos/create-reseau-social.input';
import { UpdateReseauSocialInput } from './dtos/update-reseau-social.input';
import { Prisma } from '@prisma/client';
export declare class ReseauSocialsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReseauSocialInput: CreateReseauSocialInput): Prisma.Prisma__ReseauSocialClient<{
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
    update(updateReseauSocialInput: UpdateReseauSocialInput): Prisma.Prisma__ReseauSocialClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueReseauSocialArgs): Prisma.Prisma__ReseauSocialClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        username: string;
        url: string;
        contactId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
