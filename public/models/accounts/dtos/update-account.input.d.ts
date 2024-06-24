import { CreateAccountInput } from './create-account.input';
import { Account } from '@prisma/client';
declare const UpdateAccountInput_base: import("@nestjs/common").Type<Partial<CreateAccountInput>>;
export declare class UpdateAccountInput extends UpdateAccountInput_base {
    id: Account['id'];
}
export {};
