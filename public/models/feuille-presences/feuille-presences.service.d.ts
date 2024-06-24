import { FindManyFeuillePresenceArgs, FindUniqueFeuillePresenceArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateFeuillePresenceInput } from './dtos/create-feuille-presence.input';
import { UpdateFeuillePresenceInput } from './dtos/update-feuille-presence.input';
import { Prisma } from '@prisma/client';
export declare class FeuillePresencesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFeuillePresenceInput: CreateFeuillePresenceInput): Prisma.Prisma__FeuillePresenceClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyFeuillePresenceArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }[]>;
    findAllByEtablissement(args: FindManyFeuillePresenceArgs, id: number): Prisma.PrismaPromise<{
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
    update(updateFeuillePresenceInput: UpdateFeuillePresenceInput): Prisma.Prisma__FeuillePresenceClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueFeuillePresenceArgs): Prisma.Prisma__FeuillePresenceClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        heureDebut: Date;
        heureFin: Date;
        coursId: number;
        etudiantId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
