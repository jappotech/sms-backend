import { CreateEtudiantInput } from './create-etudiant.input';
import { Etudiant } from '@prisma/client';
declare const UpdateEtudiantInput_base: import("@nestjs/common").Type<Partial<CreateEtudiantInput>>;
export declare class UpdateEtudiantInput extends UpdateEtudiantInput_base {
    id: Etudiant['id'];
}
export {};
