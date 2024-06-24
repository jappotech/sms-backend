import { SpecialitesService } from './specialites.service';
import { Specialite } from './entity/specialite.entity';
import { FindManySpecialiteArgs, FindUniqueSpecialiteArgs } from './dtos/find.args';
import { CreateSpecialiteInput } from './dtos/create-specialite.input';
import { UpdateSpecialiteInput } from './dtos/update-specialite.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SpecialitesResolver {
    private readonly specialitesService;
    private readonly prisma;
    constructor(specialitesService: SpecialitesService, prisma: PrismaService);
    createSpecialite(args: CreateSpecialiteInput, user: GetUserType): Prisma.Prisma__SpecialiteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManySpecialiteArgs, user: GetUserType): Promise<{
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
    updateSpecialite(args: UpdateSpecialiteInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }>;
    removeSpecialite(args: FindUniqueSpecialiteArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        etablissementId: number;
        mentionId: number;
    }>;
    classes(parent: Specialite): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }[]>;
    mention(parent: Specialite): Promise<{}>;
}
