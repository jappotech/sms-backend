import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMentionInput } from './dtos/create-mention.input';
import { UpdateMentionInput } from './dtos/update-mention.input';
import { Prisma } from '@prisma/client';
export declare class MentionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMentionInput: CreateMentionInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }>;
    findAll(args: FindManyMentionArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }[]>;
    findAllByEtablissement(args: FindManyMentionArgs, etablissementId: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }[]>;
    findOne(args: FindUniqueMentionArgs): Prisma.Prisma__MentionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateMentionInput: UpdateMentionInput): Prisma.Prisma__MentionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueMentionArgs): Prisma.Prisma__MentionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
