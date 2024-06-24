import { Professeur } from '../entity/professeur.entity';
import { UtilisateurWithAccount } from 'src/models/utilisateurs/dtos/create-utilisateur.input';
export declare class CreateProfesseurWithProfileInput extends Professeur {
    profile: UtilisateurWithAccount;
}
declare const CreateProfesseurInput_base: import("@nestjs/common").Type<Pick<CreateProfesseurWithProfileInput, "profile">>;
export declare class CreateProfesseurInput extends CreateProfesseurInput_base {
}
export {};
