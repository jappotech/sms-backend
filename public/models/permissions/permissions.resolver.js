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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const permissions_service_1 = require("./permissions.service");
const permission_entity_1 = require("./entity/permission.entity");
const find_args_1 = require("./dtos/find.args");
const create_permission_input_1 = require("./dtos/create-permission.input");
const update_permission_input_1 = require("./dtos/update-permission.input");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let PermissionsResolver = class PermissionsResolver {
    constructor(permissionsService, prisma) {
        this.permissionsService = permissionsService;
        this.prisma = prisma;
    }
    createPermission(args, user) {
        return this.permissionsService.create(args);
    }
    findAll(args) {
        return this.permissionsService.findAll(args);
    }
    findOne(args) {
        return this.permissionsService.findOne(args);
    }
    async updatePermission(args, user) {
        const permission = await this.prisma.permission.findUnique({
            where: { id: args.id },
        });
        return this.permissionsService.update(args);
    }
    async removePermission(args, user) {
        const permission = await this.prisma.permission.findUnique(args);
        return this.permissionsService.remove(args);
    }
};
exports.PermissionsResolver = PermissionsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission),
    __param(0, (0, graphql_1.Args)('createPermissionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_permission_input_1.CreatePermissionInput, Object]),
    __metadata("design:returntype", void 0)
], PermissionsResolver.prototype, "createPermission", null);
__decorate([
    (0, graphql_1.Query)(() => [permission_entity_1.Permission], { name: 'permissions' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyPermissionArgs]),
    __metadata("design:returntype", void 0)
], PermissionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => permission_entity_1.Permission, { name: 'permission' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniquePermissionArgs]),
    __metadata("design:returntype", void 0)
], PermissionsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission),
    __param(0, (0, graphql_1.Args)('updatePermissionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_permission_input_1.UpdatePermissionInput, Object]),
    __metadata("design:returntype", Promise)
], PermissionsResolver.prototype, "updatePermission", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => permission_entity_1.Permission),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniquePermissionArgs, Object]),
    __metadata("design:returntype", Promise)
], PermissionsResolver.prototype, "removePermission", null);
exports.PermissionsResolver = PermissionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => permission_entity_1.Permission),
    __metadata("design:paramtypes", [permissions_service_1.PermissionsService,
        prisma_service_1.PrismaService])
], PermissionsResolver);
//# sourceMappingURL=permissions.resolver.js.map