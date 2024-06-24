import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly reflector;
    private readonly prisma;
    constructor(jwtService: JwtService, reflector: Reflector, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private authenticateUser;
    private authorizeUser;
    private getMetadata;
}
