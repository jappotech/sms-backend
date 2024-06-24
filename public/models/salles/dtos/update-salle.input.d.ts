import { CreateSalleInput } from './create-salle.input';
import { Salle } from '@prisma/client';
declare const UpdateSalleInput_base: import("@nestjs/common").Type<Partial<CreateSalleInput>>;
export declare class UpdateSalleInput extends UpdateSalleInput_base {
    id: Salle['id'];
}
export {};
