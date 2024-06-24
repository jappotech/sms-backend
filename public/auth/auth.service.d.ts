import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { LoginInput } from './dtos/login.input';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: LoginInput): Promise<{
        access_token: string;
    }>;
}
