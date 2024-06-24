import { FeuillePresencesService } from './feuille-presences.service';
import { FindManyFeuillePresenceArgs, FindUniqueFeuillePresenceArgs } from './dtos/find.args';
import { CreateFeuillePresenceInput } from './dtos/create-feuille-presence.input';
import { UpdateFeuillePresenceInput } from './dtos/update-feuille-presence.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class FeuillePresencesResolver {
    private readonly feuillePresencesService;
    private readonly prisma;
    constructor(feuillePresencesService: FeuillePresencesService, prisma: PrismaService);
    createFeuillePresence(args: CreateFeuillePresenceInput, user: GetUserType): Prisma.Prisma__FeuillePresenceClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyFeuillePresenceArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }[]>;
    findOne(args: FindUniqueFeuillePresenceArgs): Prisma.Prisma__FeuillePresenceClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateFeuillePresence(args: UpdateFeuillePresenceInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }>;
    removeFeuillePresence(args: FindUniqueFeuillePresenceArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }>;
}
