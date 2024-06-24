import { CreateUtilisateurInput } from './create-utilisateur.input';
import { Utilisateur } from '@prisma/client';
declare const UpdateUtilisateurInput_base: import("@nestjs/common").Type<Partial<CreateUtilisateurInput>>;
export declare class UpdateUtilisateurInput extends UpdateUtilisateurInput_base {
    id: Utilisateur['id'];
}
export {};
