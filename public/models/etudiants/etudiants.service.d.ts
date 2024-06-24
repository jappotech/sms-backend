import { FindManyEtudiantArgs, FindUniqueEtudiantArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEtudiantInput } from './dtos/create-etudiant.input';
import { UpdateEtudiantInput } from './dtos/update-etudiant.input';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
export declare class EtudiantsService {
    private readonly prisma;
    private readonly utilisateurService;
    constructor(prisma: PrismaService, utilisateurService: UtilisateursService);
    create(createEtudiantInput: CreateEtudiantInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }>;
    findAll(args: FindManyEtudiantArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }[]>;
    findAllByEtablissement(args: FindManyEtudiantArgs, id: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }[]>;
    findOne(args: FindUniqueEtudiantArgs): import(".prisma/client").Prisma.Prisma__EtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateEtudiantInput: UpdateEtudiantInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }>;
    remove(args: FindUniqueEtudiantArgs): import(".prisma/client").Prisma.Prisma__EtudiantClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        ine: string;
        baccaleaureat: string;
        anneeBaccaleaureat: number;
        profileId: number;
        feuillePresencesId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
