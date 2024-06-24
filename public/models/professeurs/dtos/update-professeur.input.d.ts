import { CreateProfesseurInput } from './create-professeur.input';
import { Professeur } from '@prisma/client';
declare const UpdateProfesseurInput_base: import("@nestjs/common").Type<Partial<CreateProfesseurInput>>;
export declare class UpdateProfesseurInput extends UpdateProfesseurInput_base {
    id: Professeur['id'];
}
export {};
