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
exports.DomainesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const domaines_service_1 = require("./domaines.service");
const domaine_entity_1 = require("./entity/domaine.entity");
const find_args_1 = require("./dtos/find.args");
const create_domaine_input_1 = require("./dtos/create-domaine.input");
const update_domaine_input_1 = require("./dtos/update-domaine.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const mention_entity_1 = require("../mentions/entity/mention.entity");
let DomainesResolver = class DomainesResolver {
    constructor(domainesService, prisma) {
        this.domainesService = domainesService;
        this.prisma = prisma;
    }
    createDomaine(args, user) {
        return this.domainesService.create(args);
    }
    async findAll(args, user) {
        return this.domainesService.findAll(args);
    }
    async findAllByEtablissement(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.domainesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.domainesService.findAll(args);
    }
    findOne(args) {
        return this.domainesService.findOne(args);
    }
    async updateDomaine(args, user) {
        const domaine = await this.prisma.domaine.findUnique({
            where: { id: args.id },
        });
        return this.domainesService.update(args);
    }
    async removeDomaine(args, user) {
        const domaine = await this.prisma.domaine.findUnique(args);
        return this.domainesService.remove(args);
    }
    async mentions(parent, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        return this.prisma.mention.findMany({
            where: {
                AND: [
                    {
                        domaineId: parent.id,
                    },
                    {
                        domaine: {
                            etablissements: {
                                some: {
                                    id: affiliation.etablissementId,
                                },
                            },
                        },
                    },
                ],
            },
        });
    }
};
exports.DomainesResolver = DomainesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => domaine_entity_1.Domaine),
    __param(0, (0, graphql_1.Args)('createDomaineInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_domaine_input_1.CreateDomaineInput, Object]),
    __metadata("design:returntype", void 0)
], DomainesResolver.prototype, "createDomaine", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [domaine_entity_1.Domaine], { name: 'domaines' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyDomaineArgs, Object]),
    __metadata("design:returntype", Promise)
], DomainesResolver.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [domaine_entity_1.Domaine], { name: 'domaines_etablissement' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyDomaineArgs, Object]),
    __metadata("design:returntype", Promise)
], DomainesResolver.prototype, "findAllByEtablissement", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => domaine_entity_1.Domaine, { name: 'domaine' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueDomaineArgs]),
    __metadata("design:returntype", void 0)
], DomainesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => domaine_entity_1.Domaine),
    __param(0, (0, graphql_1.Args)('updateDomaineInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_domaine_input_1.UpdateDomaineInput, Object]),
    __metadata("design:returntype", Promise)
], DomainesResolver.prototype, "updateDomaine", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => domaine_entity_1.Domaine),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueDomaineArgs, Object]),
    __metadata("design:returntype", Promise)
], DomainesResolver.prototype, "removeDomaine", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.ResolveField)(() => [mention_entity_1.Mention]),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [domaine_entity_1.Domaine, Object]),
    __metadata("design:returntype", Promise)
], DomainesResolver.prototype, "mentions", null);
exports.DomainesResolver = DomainesResolver = __decorate([
    (0, graphql_1.Resolver)(() => domaine_entity_1.Domaine),
    __metadata("design:paramtypes", [domaines_service_1.DomainesService,
        prisma_service_1.PrismaService])
], DomainesResolver);
//# sourceMappingURL=domaines.resolver.js.map