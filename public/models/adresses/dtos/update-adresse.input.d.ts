import { CreateAdresseInput } from './create-adresse.input';
import { Adresse } from '@prisma/client';
declare const UpdateAdresseInput_base: import("@nestjs/common").Type<Partial<CreateAdresseInput>>;
export declare class UpdateAdresseInput extends UpdateAdresseInput_base {
    id: Adresse['id'];
}
export {};
