import { FindManySpecialiteArgs, FindUniqueSpecialiteArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateSpecialiteInput } from './dtos/create-specialite.input';
import { UpdateSpecialiteInput } from './dtos/update-specialite.input';
import { Prisma } from '@prisma/client';
export declare class SpecialitesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSpecialiteInput: CreateSpecialiteInput): Prisma.Prisma__SpecialiteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManySpecialiteArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }[]>;
    findAllByEtablissement(args: FindManySpecialiteArgs, etablissementId: number): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }[]>;
    findOne(args: FindUniqueSpecialiteArgs): Prisma.Prisma__SpecialiteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateSpecialiteInput: UpdateSpecialiteInput): Prisma.Prisma__SpecialiteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueSpecialiteArgs): Prisma.Prisma__SpecialiteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
