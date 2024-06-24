import { AdressesService } from './adresses.service';
import { FindManyAdresseArgs, FindUniqueAdresseArgs } from './dtos/find.args';
import { CreateAdresseInput } from './dtos/create-adresse.input';
import { UpdateAdresseInput } from './dtos/update-adresse.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class AdressesResolver {
    private readonly adressesService;
    private readonly prisma;
    constructor(adressesService: AdressesService, prisma: PrismaService);
    createAdresse(args: CreateAdresseInput, user: GetUserType): Prisma.Prisma__AdresseClient<{
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
    updateAdresse(args: UpdateAdresseInput, user: GetUserType): Promise<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }>;
    removeAdresse(args: FindUniqueAdresseArgs, user: GetUserType): Promise<{
        id: number;
        pays: string;
        region: string;
        ville: string;
        codePostal: string;
        geolocalisation: string;
    }>;
}
