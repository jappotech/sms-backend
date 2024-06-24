import { PaiementsService } from './paiements.service';
import { FindManyPaiementArgs, FindUniquePaiementArgs } from './dtos/find.args';
import { CreatePaiementInput } from './dtos/create-paiement.input';
import { UpdatePaiementInput } from './dtos/update-paiement.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PaiementsResolver {
    private readonly paiementsService;
    private readonly prisma;
    constructor(paiementsService: PaiementsService, prisma: PrismaService);
    createPaiement(args: CreatePaiementInput, user: GetUserType): Prisma.Prisma__PaiementClient<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyPaiementArgs, user: GetUserType): Promise<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }[]>;
    findOne(args: FindUniquePaiementArgs): Prisma.Prisma__PaiementClient<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updatePaiement(args: UpdatePaiementInput, user: GetUserType): Promise<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }>;
    removePaiement(args: FindUniquePaiementArgs, user: GetUserType): Promise<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }>;
}
