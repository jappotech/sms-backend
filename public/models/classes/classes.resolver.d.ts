import { ClassesService } from './classes.service';
import { Classe } from './entity/classe.entity';
import { FindManyClasseArgs, FindUniqueClasseArgs } from './dtos/find.args';
import { CreateClasseInput } from './dtos/create-classe.input';
import { UpdateClasseInput } from './dtos/update-classe.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ClassesResolver {
    private readonly classesService;
    private readonly prisma;
    constructor(classesService: ClassesService, prisma: PrismaService);
    createClasse(args: CreateClasseInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }>;
    findAll(args: FindManyClasseArgs, user: GetUserType): Promise<{
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
    findOne(args: FindUniqueClasseArgs): Prisma.Prisma__ClasseClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateClasse(args: UpdateClasseInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }>;
    removeClasse(args: FindUniqueClasseArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
        niveau: string;
        etablissementId: number;
        specialiteId: number;
        anneeScolaireId: number;
    }>;
    semestres(parent: Classe): Promise<({
        uniteEnseignement: ({
            matieres: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                code: string;
                nom: string;
                credit: number;
                coefficient: number;
                nbHeure: number;
                uniteEnseignementId: number;
            }[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            nom: string;
            numero: number;
            credit: number;
            semestreId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        numero: number;
        grade: import(".prisma/client").$Enums.TypeDiplome;
        dateDebut: Date;
        dateFin: Date;
        nombreSemaine: number;
        etablissementId: number;
        classeId: number;
    })[]>;
    inscriptions(parent: Classe): Promise<({
        etudiant: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            ine: string;
            baccaleaureat: string;
            anneeBaccaleaureat: number;
            profileId: number;
            feuillePresencesId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reference: string;
        premiereInscription: boolean;
        dernierDiplome: string;
        autreEtablissement: string;
        activiteProfessionnel: string;
        niveau: string;
        statut: string;
        diplomeId: number;
        etudiantId: number;
        classeId: number;
    })[]>;
    evaluations(parent: Classe): Promise<unknown>;
    anneeScolaire(parent: Classe): Promise<{}>;
    specialite(parent: Classe): Promise<{}>;
    cours(parent: Classe): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        description: string;
        dateDebut: Date;
        dateFin: Date;
        heureDebut: Date;
        heureFin: Date;
        matiereId: number;
        salleId: number;
        classeId: number;
        professeurId: number;
    }[]>;
}
