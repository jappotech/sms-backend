import { CreateNoteEtudiantInput } from './create-note-etudiant.input';
import { NoteEtudiant } from '@prisma/client';
declare const UpdateNoteEtudiantInput_base: import("@nestjs/common").Type<Partial<CreateNoteEtudiantInput>>;
export declare class UpdateNoteEtudiantInput extends UpdateNoteEtudiantInput_base {
    id: NoteEtudiant['id'];
}
export {};
