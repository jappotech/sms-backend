import { Contact } from '../entity/contact.entity';
declare const CreateContactInput_base: import("@nestjs/common").Type<Pick<Contact, "telephone" | "fix" | "fax" | "email" | "siteWeb">>;
export declare class CreateContactInput extends CreateContactInput_base {
}
export {};
