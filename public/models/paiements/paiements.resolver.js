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
exports.PaiementsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const paiements_service_1 = require("./paiements.service");
const paiement_entity_1 = require("./entity/paiement.entity");
const find_args_1 = require("./dtos/find.args");
const create_paiement_input_1 = require("./dtos/create-paiement.input");
const update_paiement_input_1 = require("./dtos/update-paiement.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let PaiementsResolver = class PaiementsResolver {
    constructor(paiementsService, prisma) {
        this.paiementsService = paiementsService;
        this.prisma = prisma;
    }
    createPaiement(args, user) {
        return this.paiementsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.paiementsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.paiementsService.findAll(args);
    }
    findOne(args) {
        return this.paiementsService.findOne(args);
    }
    async updatePaiement(args, user) {
        const paiement = await this.prisma.paiement.findUnique({
            where: { id: args.id },
        });
        return this.paiementsService.update(args);
    }
    async removePaiement(args, user) {
        const paiement = await this.prisma.paiement.findUnique(args);
        return this.paiementsService.remove(args);
    }
};
exports.PaiementsResolver = PaiementsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => paiement_entity_1.Paiement),
    __param(0, (0, graphql_1.Args)('createPaiementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paiement_input_1.CreatePaiementInput, Object]),
    __metadata("design:returntype", void 0)
], PaiementsResolver.prototype, "createPaiement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [paiement_entity_1.Paiement], { name: 'paiements' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyPaiementArgs, Object]),
    __metadata("design:returntype", Promise)
], PaiementsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => paiement_entity_1.Paiement, { name: 'paiement' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniquePaiementArgs]),
    __metadata("design:returntype", void 0)
], PaiementsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => paiement_entity_1.Paiement),
    __param(0, (0, graphql_1.Args)('updatePaiementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_paiement_input_1.UpdatePaiementInput, Object]),
    __metadata("design:returntype", Promise)
], PaiementsResolver.prototype, "updatePaiement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => paiement_entity_1.Paiement),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniquePaiementArgs, Object]),
    __metadata("design:returntype", Promise)
], PaiementsResolver.prototype, "removePaiement", null);
exports.PaiementsResolver = PaiementsResolver = __decorate([
    (0, graphql_1.Resolver)(() => paiement_entity_1.Paiement),
    __metadata("design:paramtypes", [paiements_service_1.PaiementsService,
        prisma_service_1.PrismaService])
], PaiementsResolver);
//# sourceMappingURL=paiements.resolver.js.map