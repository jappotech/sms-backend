import { CreateUniteEnseignementInput } from './create-unite-enseignement.input';
import { UniteEnseignement } from '@prisma/client';
declare const UpdateUniteEnseignementInput_base: import("@nestjs/common").Type<Partial<CreateUniteEnseignementInput>>;
export declare class UpdateUniteEnseignementInput extends UpdateUniteEnseignementInput_base {
    id: UniteEnseignement['id'];
}
export {};
