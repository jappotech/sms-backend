import { CreateDomaineInput } from './create-domaine.input';
import { Domaine } from '@prisma/client';
declare const UpdateDomaineInput_base: import("@nestjs/common").Type<Partial<CreateDomaineInput>>;
export declare class UpdateDomaineInput extends UpdateDomaineInput_base {
    id: Domaine['id'];
}
export {};
