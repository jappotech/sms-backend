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
exports.InscriptionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const inscriptions_service_1 = require("./inscriptions.service");
const inscription_entity_1 = require("./entity/inscription.entity");
const find_args_1 = require("./dtos/find.args");
const create_inscription_input_1 = require("./dtos/create-inscription.input");
const update_inscription_input_1 = require("./dtos/update-inscription.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const etudiant_entity_1 = require("../etudiants/entity/etudiant.entity");
const classe_entity_1 = require("../classes/entity/classe.entity");
let InscriptionsResolver = class InscriptionsResolver {
    constructor(inscriptionsService, prisma) {
        this.inscriptionsService = inscriptionsService;
        this.prisma = prisma;
    }
    createInscription(args, user) {
        return this.inscriptionsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.inscriptionsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.inscriptionsService.findAll(args);
    }
    findOne(args) {
        return this.inscriptionsService.findOne(args);
    }
    async updateInscription(args, user) {
        const inscription = await this.prisma.inscription.findUnique({
            where: { id: args.id },
        });
        return this.inscriptionsService.update(args);
    }
    async removeInscription(args, user) {
        const inscription = await this.prisma.inscription.findUnique(args);
        return this.inscriptionsService.remove(args);
    }
    async etudiant(parent) {
        if (!parent.etudiantId) {
            return {};
        }
        return this.prisma.etudiant.findUnique({
            where: { id: parent.etudiantId },
            include: { profile: true },
        });
    }
    async classe(parent) {
        if (!parent.classeId) {
            return {};
        }
        return this.prisma.classe.findUnique({
            where: { id: parent.classeId },
            include: { etablissement: true, semestres: true },
        });
    }
};
exports.InscriptionsResolver = InscriptionsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => inscription_entity_1.Inscription),
    __param(0, (0, graphql_1.Args)('createInscriptionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscription_input_1.CreateInscriptionInput, Object]),
    __metadata("design:returntype", void 0)
], InscriptionsResolver.prototype, "createInscription", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [inscription_entity_1.Inscription], { name: 'inscriptions' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyInscriptionArgs, Object]),
    __metadata("design:returntype", Promise)
], InscriptionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => inscription_entity_1.Inscription, { name: 'inscription' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueInscriptionArgs]),
    __metadata("design:returntype", void 0)
], InscriptionsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => inscription_entity_1.Inscription),
    __param(0, (0, graphql_1.Args)('updateInscriptionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_inscription_input_1.UpdateInscriptionInput, Object]),
    __metadata("design:returntype", Promise)
], InscriptionsResolver.prototype, "updateInscription", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => inscription_entity_1.Inscription),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueInscriptionArgs, Object]),
    __metadata("design:returntype", Promise)
], InscriptionsResolver.prototype, "removeInscription", null);
__decorate([
    (0, graphql_1.ResolveField)(() => etudiant_entity_1.Etudiant),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inscription_entity_1.Inscription]),
    __metadata("design:returntype", Promise)
], InscriptionsResolver.prototype, "etudiant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => classe_entity_1.Classe),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inscription_entity_1.Inscription]),
    __metadata("design:returntype", Promise)
], InscriptionsResolver.prototype, "classe", null);
exports.InscriptionsResolver = InscriptionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => inscription_entity_1.Inscription),
    __metadata("design:paramtypes", [inscriptions_service_1.InscriptionsService,
        prisma_service_1.PrismaService])
], InscriptionsResolver);
//# sourceMappingURL=inscriptions.resolver.js.map