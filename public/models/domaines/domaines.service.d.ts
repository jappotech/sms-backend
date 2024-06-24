import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateDomaineInput } from './dtos/create-domaine.input';
import { UpdateDomaineInput } from './dtos/update-domaine.input';
import { Prisma } from '@prisma/client';
export declare class DomainesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDomaineInput: CreateDomaineInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }>;
    findAll(args: FindManyDomaineArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }[]>;
    findAllByEtablissement(args: FindManyDomaineArgs, etablissementId: number): Prisma.PrismaPromise<{
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
    update(updateDomaineInput: UpdateDomaineInput): Prisma.Prisma__DomaineClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueDomaineArgs): Prisma.Prisma__DomaineClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
