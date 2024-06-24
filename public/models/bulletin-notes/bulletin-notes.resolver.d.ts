import { BulletinNotesService } from './bulletin-notes.service';
import { BulletinNotes, ResultatAnnuel } from './entity/bulletin-notes.entity';
import { FindUniqueBulletinNotesAnnuelArgs, FindUniqueBulletinNotesArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class BulletinNotesResolver {
    private readonly bulletinNotesService;
    private readonly prisma;
    constructor(bulletinNotesService: BulletinNotesService, prisma: PrismaService);
    semestriel(args: FindUniqueBulletinNotesArgs): Promise<BulletinNotes>;
    annuel(args: FindUniqueBulletinNotesAnnuelArgs): Promise<BulletinNotes[]>;
    validationAnneeScolaire(args: FindUniqueBulletinNotesAnnuelArgs): Promise<ResultatAnnuel>;
    validationSemestre(args: FindUniqueBulletinNotesArgs): Promise<"Semestre Validé" | "Semestre Invalidé">;
    generateRandomNotes(args: FindUniqueBulletinNotesArgs): Promise<any[]>;
}
