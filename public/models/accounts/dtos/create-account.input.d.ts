import { Account } from '../entity/account.entity';
declare const CreateAccountInput_base: import("@nestjs/common").Type<Pick<Account, "roles" | "username" | "password" | "userId">>;
export declare class CreateAccountInput extends CreateAccountInput_base {
}
export {};
