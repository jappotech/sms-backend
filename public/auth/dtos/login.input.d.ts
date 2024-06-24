import { Login } from '../entity/login.entity';
declare const LoginInput_base: import("@nestjs/common").Type<Pick<Login, "username" | "password">>;
export declare class LoginInput extends LoginInput_base {
}
export {};
