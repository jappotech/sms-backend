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
exports.SallesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const salles_service_1 = require("./salles.service");
const salle_entity_1 = require("./entity/salle.entity");
const find_args_1 = require("./dtos/find.args");
const create_salle_input_1 = require("./dtos/create-salle.input");
const update_salle_input_1 = require("./dtos/update-salle.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let SallesResolver = class SallesResolver {
    constructor(sallesService, prisma) {
        this.sallesService = sallesService;
        this.prisma = prisma;
    }
    createSalle(args, user) {
        return this.sallesService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.sallesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.sallesService.findAll(args);
    }
    findOne(args) {
        return this.sallesService.findOne(args);
    }
    async updateSalle(args, user) {
        const salle = await this.prisma.salle.findUnique({
            where: { id: args.id },
        });
        return this.sallesService.update(args);
    }
    async removeSalle(args, user) {
        const salle = await this.prisma.salle.findUnique(args);
        return this.sallesService.remove(args);
    }
};
exports.SallesResolver = SallesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => salle_entity_1.Salle),
    __param(0, (0, graphql_1.Args)('createSalleInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_salle_input_1.CreateSalleInput, Object]),
    __metadata("design:returntype", void 0)
], SallesResolver.prototype, "createSalle", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [salle_entity_1.Salle], { name: 'salles' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManySalleArgs, Object]),
    __metadata("design:returntype", Promise)
], SallesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => salle_entity_1.Salle, { name: 'salle' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSalleArgs]),
    __metadata("design:returntype", void 0)
], SallesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => salle_entity_1.Salle),
    __param(0, (0, graphql_1.Args)('updateSalleInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_salle_input_1.UpdateSalleInput, Object]),
    __metadata("design:returntype", Promise)
], SallesResolver.prototype, "updateSalle", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => salle_entity_1.Salle),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSalleArgs, Object]),
    __metadata("design:returntype", Promise)
], SallesResolver.prototype, "removeSalle", null);
exports.SallesResolver = SallesResolver = __decorate([
    (0, graphql_1.Resolver)(() => salle_entity_1.Salle),
    __metadata("design:paramtypes", [salles_service_1.SallesService,
        prisma_service_1.PrismaService])
], SallesResolver);
//# sourceMappingURL=salles.resolver.js.map