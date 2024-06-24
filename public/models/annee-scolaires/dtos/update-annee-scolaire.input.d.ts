import { CreateAnneeScolaireInput } from './create-annee-scolaire.input';
import { AnneeScolaire } from '@prisma/client';
declare const UpdateAnneeScolaireInput_base: import("@nestjs/common").Type<Partial<CreateAnneeScolaireInput>>;
export declare class UpdateAnneeScolaireInput extends UpdateAnneeScolaireInput_base {
    id: AnneeScolaire['id'];
}
export {};
