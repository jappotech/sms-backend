"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthGuard = class AuthGuard {
    constructor(jwtService, reflector, prisma) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        await this.authenticateUser(req);
        return this.authorizeUser(req, context);
    }
    async authenticateUser(req) {
        const bearerHeader = req.headers.authorization;
        const token = bearerHeader?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('No token provided.');
        }
        try {
            const user = await this.jwtService.verify(token);
            req.user = user;
        }
        catch (err) {
            console.error('Token validation error:', err);
            throw new common_1.UnauthorizedException('Token validation error:', err);
        }
        if (!req.user) {
            throw new common_1.UnauthorizedException('Invalid token.');
        }
    }
    async authorizeUser(req, context) {
        const requiredRoles = this.getMetadata('roles', context);
        const account = await this.prisma.account.findUnique({
            where: { uid: req.user.uid },
        });
        const userRoles = account.roles;
        req.user.roles = userRoles;
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }
        const hasRole = userRoles.some((userRole) => requiredRoles.every((requiredRole) => requiredRole === userRole));
        if (!hasRole) {
            throw new common_1.UnauthorizedException('Invalid role.');
        }
        return true;
    }
    getMetadata(key, context) {
        return this.reflector.getAllAndOverride(key, [
            context.getHandler(),
            context.getClass(),
        ]);
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        prisma_service_1.PrismaService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map