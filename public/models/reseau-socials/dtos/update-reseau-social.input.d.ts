import { CreateReseauSocialInput } from './create-reseau-social.input';
import { ReseauSocial } from '@prisma/client';
declare const UpdateReseauSocialInput_base: import("@nestjs/common").Type<Partial<CreateReseauSocialInput>>;
export declare class UpdateReseauSocialInput extends UpdateReseauSocialInput_base {
    id: ReseauSocial['id'];
}
export {};
