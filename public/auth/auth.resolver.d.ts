import { AuthService } from './auth.service';
import { LoginInput } from './dtos/login.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(args: LoginInput): Promise<{
        access_token: string;
    }>;
}
