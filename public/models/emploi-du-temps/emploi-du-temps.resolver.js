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
exports.EmploiDuTempsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const emploi_du_temps_service_1 = require("./emploi-du-temps.service");
const emploi_du_temps_entity_1 = require("./entity/emploi-du-temps.entity");
const find_args_1 = require("./dtos/find.args");
const create_emploi_du_temps_input_1 = require("./dtos/create-emploi-du-temps.input");
const update_emploi_du_temps_input_1 = require("./dtos/update-emploi-du-temps.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let EmploiDuTempsResolver = class EmploiDuTempsResolver {
    constructor(emploiDuTempsService, prisma) {
        this.emploiDuTempsService = emploiDuTempsService;
        this.prisma = prisma;
    }
    createEmploiDuTemps(args, user) {
        return this.emploiDuTempsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.emploiDuTempsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.emploiDuTempsService.findAll(args);
    }
    findOne(args) {
        return this.emploiDuTempsService.findOne(args);
    }
    async updateEmploiDuTemps(args, user) {
        const emploiDuTemps = await this.prisma.emploiDuTemps.findUnique({
            where: { id: args.id },
        });
        return this.emploiDuTempsService.update(args);
    }
    async removeEmploiDuTemps(args, user) {
        const emploiDuTemps = await this.prisma.emploiDuTemps.findUnique(args);
        return this.emploiDuTempsService.remove(args);
    }
};
exports.EmploiDuTempsResolver = EmploiDuTempsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => emploi_du_temps_entity_1.EmploiDuTemps),
    __param(0, (0, graphql_1.Args)('createEmploiDuTempsInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emploi_du_temps_input_1.CreateEmploiDuTempsInput, Object]),
    __metadata("design:returntype", void 0)
], EmploiDuTempsResolver.prototype, "createEmploiDuTemps", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [emploi_du_temps_entity_1.EmploiDuTemps], { name: 'emploisDuTemps' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyEmploiDuTempsArgs, Object]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => emploi_du_temps_entity_1.EmploiDuTemps, { name: 'emploiDuTemps' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEmploiDuTempsArgs]),
    __metadata("design:returntype", void 0)
], EmploiDuTempsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => emploi_du_temps_entity_1.EmploiDuTemps),
    __param(0, (0, graphql_1.Args)('updateEmploiDuTempsInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_emploi_du_temps_input_1.UpdateEmploiDuTempsInput, Object]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsResolver.prototype, "updateEmploiDuTemps", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => emploi_du_temps_entity_1.EmploiDuTemps),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEmploiDuTempsArgs, Object]),
    __metadata("design:returntype", Promise)
], EmploiDuTempsResolver.prototype, "removeEmploiDuTemps", null);
exports.EmploiDuTempsResolver = EmploiDuTempsResolver = __decorate([
    (0, graphql_1.Resolver)(() => emploi_du_temps_entity_1.EmploiDuTemps),
    __metadata("design:paramtypes", [emploi_du_temps_service_1.EmploiDuTempsService,
        prisma_service_1.PrismaService])
], EmploiDuTempsResolver);
//# sourceMappingURL=emploi-du-temps.resolver.js.map