import { CreateContactInput } from './create-contact.input';
import { Contact } from '@prisma/client';
declare const UpdateContactInput_base: import("@nestjs/common").Type<Partial<CreateContactInput>>;
export declare class UpdateContactInput extends UpdateContactInput_base {
    id: Contact['id'];
}
export {};
