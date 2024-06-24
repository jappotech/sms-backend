import { CreateSemestreInput } from './create-semestre.input';
import { Semestre } from '@prisma/client';
declare const UpdateSemestreInput_base: import("@nestjs/common").Type<Partial<CreateSemestreInput>>;
export declare class UpdateSemestreInput extends UpdateSemestreInput_base {
    id: Semestre['id'];
}
export {};
