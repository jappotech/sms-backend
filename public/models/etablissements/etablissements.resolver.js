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
exports.EtablissementsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const etablissements_service_1 = require("./etablissements.service");
const etablissement_entity_1 = require("./entity/etablissement.entity");
const find_args_1 = require("./dtos/find.args");
const create_etablissement_input_1 = require("./dtos/create-etablissement.input");
const update_etablissement_input_1 = require("./dtos/update-etablissement.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const domaine_entity_1 = require("../domaines/entity/domaine.entity");
const adresse_entity_1 = require("../adresses/entity/adresse.entity");
const contact_entity_1 = require("../contacts/entity/contact.entity");
let EtablissementsResolver = class EtablissementsResolver {
    constructor(etablissementsService, prisma) {
        this.etablissementsService = etablissementsService;
        this.prisma = prisma;
    }
    createEtablissement(args, user) {
        return this.etablissementsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.etablissementsService.findAll({
                ...args,
                where: {
                    ...args.where,
                    id: {
                        equals: affiliation.etablissementId,
                    },
                },
            });
        }
        return this.etablissementsService.findAll(args);
    }
    findOne(args) {
        return this.etablissementsService.findOne(args);
    }
    async updateEtablissement(args, user) {
        const etablissement = await this.prisma.etablissement.findUnique({
            where: { id: args.id },
        });
        return this.etablissementsService.update(args);
    }
    async removeEtablissement(args, user) {
        const etablissement = await this.prisma.etablissement.findUnique(args);
        return this.etablissementsService.remove(args);
    }
    async domaines(parent) {
        return this.prisma.domaine.findMany({
            where: {
                etablissements: {
                    some: {
                        id: parent.id,
                    },
                },
            },
        });
    }
    async adresse(parent) {
        if (!parent.adresseId) {
            return {};
        }
        return this.prisma.adresse.findUnique({
            where: { id: parent.adresseId },
        });
    }
    async contact(parent) {
        if (!parent.contactId) {
            return {};
        }
        return this.prisma.contact.findUnique({
            where: { id: parent.contactId },
        });
    }
};
exports.EtablissementsResolver = EtablissementsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => etablissement_entity_1.Etablissement),
    __param(0, (0, graphql_1.Args)('createEtablissementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etablissement_input_1.CreateEtablissementInput, Object]),
    __metadata("design:returntype", void 0)
], EtablissementsResolver.prototype, "createEtablissement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [etablissement_entity_1.Etablissement], { name: 'etablissements' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyEtablissementArgs, Object]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => etablissement_entity_1.Etablissement, { name: 'etablissement' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEtablissementArgs]),
    __metadata("design:returntype", void 0)
], EtablissementsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => etablissement_entity_1.Etablissement),
    __param(0, (0, graphql_1.Args)('updateEtablissementInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_etablissement_input_1.UpdateEtablissementInput, Object]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "updateEtablissement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => etablissement_entity_1.Etablissement),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEtablissementArgs, Object]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "removeEtablissement", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [domaine_entity_1.Domaine]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etablissement_entity_1.Etablissement]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "domaines", null);
__decorate([
    (0, graphql_1.ResolveField)(() => adresse_entity_1.Adresse),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etablissement_entity_1.Etablissement]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "adresse", null);
__decorate([
    (0, graphql_1.ResolveField)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etablissement_entity_1.Etablissement]),
    __metadata("design:returntype", Promise)
], EtablissementsResolver.prototype, "contact", null);
exports.EtablissementsResolver = EtablissementsResolver = __decorate([
    (0, graphql_1.Resolver)(() => etablissement_entity_1.Etablissement),
    __metadata("design:paramtypes", [etablissements_service_1.EtablissementsService,
        prisma_service_1.PrismaService])
], EtablissementsResolver);
//# sourceMappingURL=etablissements.resolver.js.map