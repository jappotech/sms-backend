import { NoteEtudiant as NoteEtudiantType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class NoteEtudiant implements RestrictProperties<NoteEtudiant, NoteEtudiantType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    note: number;
    evaluationEtudiantId: number;
    etudiantId: number;
}
