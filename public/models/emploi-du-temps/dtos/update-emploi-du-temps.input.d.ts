import { CreateEmploiDuTempsInput } from './create-emploi-du-temps.input';
import { EmploiDuTemps } from '@prisma/client';
declare const UpdateEmploiDuTempsInput_base: import("@nestjs/common").Type<Partial<CreateEmploiDuTempsInput>>;
export declare class UpdateEmploiDuTempsInput extends UpdateEmploiDuTempsInput_base {
    id: EmploiDuTemps['id'];
}
export {};
