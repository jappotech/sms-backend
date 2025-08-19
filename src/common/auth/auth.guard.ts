import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { $Enums, Account } from '@prisma/client';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    await this.authenticateUser(req);

    return this.authorizeUser(req, context);
  }

  private async authenticateUser(req: any): Promise<void> {
    const bearerHeader = req.headers.authorization;
    // Bearer eylskfdjlsdf309
    const token = bearerHeader?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided.');
    }

    try {
      const user = await this.jwtService.verify(token);
      req.user = user;
    } catch (err) {
      console.error('Token validation error:', err);
      throw new UnauthorizedException('Token validation error:', err);
    }

    if (!req.user) {
      throw new UnauthorizedException('Invalid token.');
    }
  }

  private async authorizeUser(
    req: any,
    context: ExecutionContext,
  ): Promise<boolean> {
    const requiredRoles: string[] = this.getMetadata<string[]>('roles', context);
    const account: Account = await this.prisma.account.findUnique({
      where: { uid: req.user.uid },
    });
    const userRoles: string[] = account.roles;

    req.user.roles = userRoles;

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const hasRole = requiredRoles.some((role: string) => userRoles.includes(role));

    if (!hasRole) {
      throw new UnauthorizedException('Invalid role.');
    }

    return true;
  }

  private getMetadata<T>(key: string, context: ExecutionContext): T {
    return this.reflector.getAllAndOverride<T>(key, [
      context.getHandler(),
      context.getClass(),
    ]);
  }
}
