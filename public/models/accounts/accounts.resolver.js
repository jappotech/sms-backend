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
exports.AccountsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const accounts_service_1 = require("./accounts.service");
const account_entity_1 = require("./entity/account.entity");
const find_args_1 = require("./dtos/find.args");
const create_account_input_1 = require("./dtos/create-account.input");
const update_account_input_1 = require("./dtos/update-account.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AccountsResolver = class AccountsResolver {
    constructor(accountsService, prisma) {
        this.accountsService = accountsService;
        this.prisma = prisma;
    }
    createAccount(args, user) {
        return this.accountsService.create(args);
    }
    findAll(args, user) {
        (0, util_1.checkRowLevelPermission)(user, user.uid, ['ADMIN']);
        return this.accountsService.findAll(args);
    }
    findOne(args, user) {
        (0, util_1.checkRowLevelPermission)(user, user.uid);
        return this.accountsService.findOne(args);
    }
    async updateAccount(args, user) {
        const account = await this.prisma.account.findUnique({
            where: { id: args.id },
        });
        (0, util_1.checkRowLevelPermission)(user, account.uid);
        return this.accountsService.update(args);
    }
    async removeAccount(args, user) {
        const account = await this.prisma.account.findUnique(args);
        (0, util_1.checkRowLevelPermission)(user, user.uid, ['ADMIN']);
        return this.accountsService.remove(args);
    }
    async etablissementId(parent) {
        const user = await this.prisma.utilisateur.findUnique({
            where: { accountId: parent.id },
        });
        return user?.etablissementId;
    }
};
exports.AccountsResolver = AccountsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)('createAccountInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_input_1.CreateAccountInput, Object]),
    __metadata("design:returntype", void 0)
], AccountsResolver.prototype, "createAccount", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [account_entity_1.Account], { name: 'accounts' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyAccountArgs, Object]),
    __metadata("design:returntype", void 0)
], AccountsResolver.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => account_entity_1.Account, { name: 'account' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAccountArgs, Object]),
    __metadata("design:returntype", void 0)
], AccountsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)('updateAccountInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_account_input_1.UpdateAccountInput, Object]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "updateAccount", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAccountArgs, Object]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "removeAccount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => graphql_1.Int),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], AccountsResolver.prototype, "etablissementId", null);
exports.AccountsResolver = AccountsResolver = __decorate([
    (0, graphql_1.Resolver)(() => account_entity_1.Account),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService,
        prisma_service_1.PrismaService])
], AccountsResolver);
//# sourceMappingURL=accounts.resolver.js.map