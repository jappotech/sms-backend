import { CreatePaiementInput } from './create-paiement.input';
import { Paiement } from '@prisma/client';
declare const UpdatePaiementInput_base: import("@nestjs/common").Type<Partial<CreatePaiementInput>>;
export declare class UpdatePaiementInput extends UpdatePaiementInput_base {
    id: Paiement['id'];
}
export {};
