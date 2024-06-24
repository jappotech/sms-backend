import { CreateClasseInput } from './create-classe.input';
import { Classe } from '@prisma/client';
declare const UpdateClasseInput_base: import("@nestjs/common").Type<Partial<CreateClasseInput>>;
export declare class UpdateClasseInput extends UpdateClasseInput_base {
    id: Classe['id'];
}
export {};
