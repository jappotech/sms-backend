import { CreateMatiereInput } from './create-matiere.input';
import { Matiere } from '@prisma/client';
declare const UpdateMatiereInput_base: import("@nestjs/common").Type<Partial<CreateMatiereInput>>;
export declare class UpdateMatiereInput extends UpdateMatiereInput_base {
    id: Matiere['id'];
}
export {};
