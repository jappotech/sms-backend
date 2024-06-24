import { FindUniqueBulletinNotesAnnuelArgs, FindUniqueBulletinNotesArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';
import { BulletinNotes, ResultatAnnuel } from './entity/bulletin-notes.entity';
export declare class BulletinNotesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    resultatAnnuel(args: FindUniqueBulletinNotesAnnuelArgs): Promise<ResultatAnnuel>;
    resultatSemestre(args: FindUniqueBulletinNotesArgs): Promise<"Semestre Validé" | "Semestre Invalidé">;
    bulletinAnnuel(args: FindUniqueBulletinNotesAnnuelArgs): Promise<BulletinNotes[]>;
    bulletinSemestre(args: FindUniqueBulletinNotesArgs): Promise<BulletinNotes>;
    generateRandomNotes(args: FindUniqueBulletinNotesArgs): Promise<any[]>;
    getRandomInt: (min: number, max: number) => number;
}
