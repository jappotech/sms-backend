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
exports.SpecialitesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const specialites_service_1 = require("./specialites.service");
const specialite_entity_1 = require("./entity/specialite.entity");
const find_args_1 = require("./dtos/find.args");
const create_specialite_input_1 = require("./dtos/create-specialite.input");
const update_specialite_input_1 = require("./dtos/update-specialite.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const classe_entity_1 = require("../classes/entity/classe.entity");
const mention_entity_1 = require("../mentions/entity/mention.entity");
let SpecialitesResolver = class SpecialitesResolver {
    constructor(specialitesService, prisma) {
        this.specialitesService = specialitesService;
        this.prisma = prisma;
    }
    createSpecialite(args, user) {
        return this.specialitesService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.specialitesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.specialitesService.findAll(args);
    }
    findOne(args) {
        return this.specialitesService.findOne(args);
    }
    async updateSpecialite(args, user) {
        const specialite = await this.prisma.specialite.findUnique({
            where: { id: args.id },
        });
        return this.specialitesService.update(args);
    }
    async removeSpecialite(args, user) {
        const specialite = await this.prisma.specialite.findUnique(args);
        return this.specialitesService.remove(args);
    }
    async classes(parent) {
        return this.prisma.classe.findMany({
            where: { specialiteId: parent.id },
        });
    }
    async mention(parent) {
        if (!parent.mentionId) {
            return {};
        }
        return this.prisma.mention.findUnique({
            where: { id: parent.mentionId },
        });
    }
};
exports.SpecialitesResolver = SpecialitesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => specialite_entity_1.Specialite),
    __param(0, (0, graphql_1.Args)('createSpecialiteInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialite_input_1.CreateSpecialiteInput, Object]),
    __metadata("design:returntype", void 0)
], SpecialitesResolver.prototype, "createSpecialite", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [specialite_entity_1.Specialite], { name: 'specialites' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManySpecialiteArgs, Object]),
    __metadata("design:returntype", Promise)
], SpecialitesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => specialite_entity_1.Specialite, { name: 'specialite' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSpecialiteArgs]),
    __metadata("design:returntype", void 0)
], SpecialitesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => specialite_entity_1.Specialite),
    __param(0, (0, graphql_1.Args)('updateSpecialiteInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_specialite_input_1.UpdateSpecialiteInput, Object]),
    __metadata("design:returntype", Promise)
], SpecialitesResolver.prototype, "updateSpecialite", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => specialite_entity_1.Specialite),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSpecialiteArgs, Object]),
    __metadata("design:returntype", Promise)
], SpecialitesResolver.prototype, "removeSpecialite", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [classe_entity_1.Classe]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specialite_entity_1.Specialite]),
    __metadata("design:returntype", Promise)
], SpecialitesResolver.prototype, "classes", null);
__decorate([
    (0, graphql_1.ResolveField)(() => mention_entity_1.Mention),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specialite_entity_1.Specialite]),
    __metadata("design:returntype", Promise)
], SpecialitesResolver.prototype, "mention", null);
exports.SpecialitesResolver = SpecialitesResolver = __decorate([
    (0, graphql_1.Resolver)(() => specialite_entity_1.Specialite),
    __metadata("design:paramtypes", [specialites_service_1.SpecialitesService,
        prisma_service_1.PrismaService])
], SpecialitesResolver);
//# sourceMappingURL=specialites.resolver.js.map