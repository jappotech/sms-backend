import { Etudiant } from '../entity/etudiant.entity';
import { UtilisateurWithAccount } from 'src/models/utilisateurs/dtos/create-utilisateur.input';
export declare class CreateEtudiantWithProfileInput extends Etudiant {
    profile: UtilisateurWithAccount;
    classeId: number;
}
declare const CreateEtudiantInput_base: import("@nestjs/common").Type<Pick<CreateEtudiantWithProfileInput, "profile" | "ine" | "baccaleaureat" | "anneeBaccaleaureat" | "feuillePresencesId" | "classeId">>;
export declare class CreateEtudiantInput extends CreateEtudiantInput_base {
}
export {};
