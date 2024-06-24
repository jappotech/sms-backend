import { CreateCoursInput } from './create-cours.input';
import { Cours } from '@prisma/client';
declare const UpdateCoursInput_base: import("@nestjs/common").Type<Partial<CreateCoursInput>>;
export declare class UpdateCoursInput extends UpdateCoursInput_base {
    id: Cours['id'];
}
export {};
