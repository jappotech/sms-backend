import { Etablissement } from '../entity/etablissement.entity';
import { CreateDomaineInputWithId } from 'src/models/domaines/dtos/create-domaine.input';
export declare class etablissementWithDomaines extends Etablissement {
    domaines: CreateDomaineInputWithId[];
}
declare const CreateEtablissementInput_base: import("@nestjs/common").Type<Pick<etablissementWithDomaines, "matricule" | "nom" | "contactId" | "adresseId" | "sigle" | "dateCreation" | "logo" | "anneeEnCours" | "domaines">>;
export declare class CreateEtablissementInput extends CreateEtablissementInput_base {
}
export {};
