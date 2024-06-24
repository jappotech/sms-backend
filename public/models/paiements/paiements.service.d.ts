import { FindManyPaiementArgs, FindUniquePaiementArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreatePaiementInput } from './dtos/create-paiement.input';
import { UpdatePaiementInput } from './dtos/update-paiement.input';
import { Prisma } from '@prisma/client';
export declare class PaiementsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPaiementInput: CreatePaiementInput): Prisma.Prisma__PaiementClient<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyPaiementArgs): Prisma.PrismaPromise<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }[]>;
    findAllByEtablissement(args: FindManyPaiementArgs, etablissementId: number): Prisma.PrismaPromise<{
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
    update(updatePaiementInput: UpdatePaiementInput): Prisma.Prisma__PaiementClient<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniquePaiementArgs): Prisma.Prisma__PaiementClient<{
        id: number;
        etudiantId: number;
        montant: number;
        datePaiement: Date;
        methodePaiement: string;
        referencePaiement: string;
        typeFrais: string;
        statutPaiement: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
