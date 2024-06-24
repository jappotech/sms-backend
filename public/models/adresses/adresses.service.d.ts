import { FindManyAdresseArgs, FindUniqueAdresseArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAdresseInput } from './dtos/create-adresse.input';
import { UpdateAdresseInput } from './dtos/update-adresse.input';
import { Prisma } from '@prisma/client';
export declare class AdressesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAdresseInput: CreateAdresseInput): Prisma.Prisma__AdresseClient<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyAdresseArgs): Prisma.PrismaPromise<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }[]>;
    findOne(args: FindUniqueAdresseArgs): Prisma.Prisma__AdresseClient<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateAdresseInput: UpdateAdresseInput): Prisma.Prisma__AdresseClient<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueAdresseArgs): Prisma.Prisma__AdresseClient<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
