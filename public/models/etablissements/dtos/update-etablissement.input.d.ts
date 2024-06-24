import { CreateEtablissementInput } from './create-etablissement.input';
import { Etablissement } from '@prisma/client';
declare const UpdateEtablissementInput_base: import("@nestjs/common").Type<Partial<CreateEtablissementInput>>;
export declare class UpdateEtablissementInput extends UpdateEtablissementInput_base {
    id: Etablissement['id'];
}
export {};
