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
exports.UniteEnseignementsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const unite_enseignements_service_1 = require("./unite-enseignements.service");
const unite_enseignement_entity_1 = require("./entity/unite-enseignement.entity");
const find_args_1 = require("./dtos/find.args");
const create_unite_enseignement_input_1 = require("./dtos/create-unite-enseignement.input");
const update_unite_enseignement_input_1 = require("./dtos/update-unite-enseignement.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const matiere_entity_1 = require("../matieres/entity/matiere.entity");
let UniteEnseignementsResolver = class UniteEnseignementsResolver {
    constructor(uniteEnseignementsService, prisma) {
        this.uniteEnseignementsService = uniteEnseignementsService;
        this.prisma = prisma;
    }
    createUniteEnseignement(args, user) {
        return this.uniteEnseignementsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.uniteEnseignementsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.uniteEnseignementsService.findAll(args);
    }
    findOne(args) {
        return this.uniteEnseignementsService.findOne(args);
    }
    async updateUniteEnseignement(args, user) {
        const uniteEnseignement = await this.prisma.uniteEnseignement.findUnique({
            where: { id: args.id },
        });
        return this.uniteEnseignementsService.update(args);
    }
    async genererCodeUniteEnseignement(args, user) {
        const uniteEnseignement = await this.prisma.uniteEnseignement.findUnique({
            where: { id: args.id },
        });
        const codeUE = await this.uniteEnseignementsService.genererCodeUE(uniteEnseignement.id);
        console.log('🚀 ~ codeUE:', codeUE);
        return this.uniteEnseignementsService.update({ ...args, code: codeUE });
    }
    async removeUniteEnseignement(args, user) {
        const uniteEnseignement = await this.prisma.uniteEnseignement.findUnique(args);
        return this.uniteEnseignementsService.remove(args);
    }
    async matieres(parent) {
        return this.prisma.matiere.findMany({
            where: { uniteEnseignementId: parent.id },
            orderBy: { id: 'asc' }
        });
    }
};
exports.UniteEnseignementsResolver = UniteEnseignementsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => unite_enseignement_entity_1.UniteEnseignement),
    __param(0, (0, graphql_1.Args)('createUniteEnseignementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unite_enseignement_input_1.CreateUniteEnseignementInput, Object]),
    __metadata("design:returntype", void 0)
], UniteEnseignementsResolver.prototype, "createUniteEnseignement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [unite_enseignement_entity_1.UniteEnseignement], { name: 'uniteEnseignements' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyUniteEnseignementArgs, Object]),
    __metadata("design:returntype", Promise)
], UniteEnseignementsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => unite_enseignement_entity_1.UniteEnseignement, { name: 'uniteEnseignement' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueUniteEnseignementArgs]),
    __metadata("design:returntype", void 0)
], UniteEnseignementsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => unite_enseignement_entity_1.UniteEnseignement),
    __param(0, (0, graphql_1.Args)('updateUniteEnseignementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_unite_enseignement_input_1.UpdateUniteEnseignementInput, Object]),
    __metadata("design:returntype", Promise)
], UniteEnseignementsResolver.prototype, "updateUniteEnseignement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => unite_enseignement_entity_1.UniteEnseignement),
    __param(0, (0, graphql_1.Args)('genererCodeUniteEnseignement')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_unite_enseignement_input_1.UpdateUniteEnseignementInput, Object]),
    __metadata("design:returntype", Promise)
], UniteEnseignementsResolver.prototype, "genererCodeUniteEnseignement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => unite_enseignement_entity_1.UniteEnseignement),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueUniteEnseignementArgs, Object]),
    __metadata("design:returntype", Promise)
], UniteEnseignementsResolver.prototype, "removeUniteEnseignement", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [matiere_entity_1.Matiere]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unite_enseignement_entity_1.UniteEnseignement]),
    __metadata("design:returntype", Promise)
], UniteEnseignementsResolver.prototype, "matieres", null);
exports.UniteEnseignementsResolver = UniteEnseignementsResolver = __decorate([
    (0, graphql_1.Resolver)(() => unite_enseignement_entity_1.UniteEnseignement),
    __metadata("design:paramtypes", [unite_enseignements_service_1.UniteEnseignementsService,
        prisma_service_1.PrismaService])
], UniteEnseignementsResolver);
//# sourceMappingURL=unite-enseignements.resolver.js.map