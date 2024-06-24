import { CreateSpecialiteInput } from './create-specialite.input';
import { Specialite } from '@prisma/client';
declare const UpdateSpecialiteInput_base: import("@nestjs/common").Type<Partial<CreateSpecialiteInput>>;
export declare class UpdateSpecialiteInput extends UpdateSpecialiteInput_base {
    id: Specialite['id'];
}
export {};
