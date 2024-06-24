import { CreateDiplomeInput } from './create-diplome.input';
import { Diplome } from '@prisma/client';
declare const UpdateDiplomeInput_base: import("@nestjs/common").Type<Partial<CreateDiplomeInput>>;
export declare class UpdateDiplomeInput extends UpdateDiplomeInput_base {
    id: Diplome['id'];
}
export {};
