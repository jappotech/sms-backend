import { MentionsService } from './mentions.service';
import { Mention } from './entity/mention.entity';
import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args';
import { CreateMentionInput } from './dtos/create-mention.input';
import { UpdateMentionInput } from './dtos/update-mention.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class MentionsResolver {
    private readonly mentionsService;
    private readonly prisma;
    constructor(mentionsService: MentionsService, prisma: PrismaService);
    createMention(args: CreateMentionInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }>;
    findAll(args: FindManyMentionArgs, user: GetUserType): Promise<{
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
    updateMention(args: UpdateMentionInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }>;
    removeMention(args: FindUniqueMentionArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        domaineId: number;
    }>;
    specialites(parent: Mention, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }[]>;
    domaine(parent: Mention): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }>;
}
