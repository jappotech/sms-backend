import { CreateInscriptionInput } from './create-inscription.input';
import { Inscription } from '@prisma/client';
declare const UpdateInscriptionInput_base: import("@nestjs/common").Type<Partial<CreateInscriptionInput>>;
export declare class UpdateInscriptionInput extends UpdateInscriptionInput_base {
    id: Inscription['id'];
}
export {};
