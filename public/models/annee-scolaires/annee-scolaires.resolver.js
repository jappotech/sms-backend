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
exports.AnneeScolairesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const annee_scolaires_service_1 = require("./annee-scolaires.service");
const annee_scolaire_entity_1 = require("./entity/annee-scolaire.entity");
const find_args_1 = require("./dtos/find.args");
const create_annee_scolaire_input_1 = require("./dtos/create-annee-scolaire.input");
const update_annee_scolaire_input_1 = require("./dtos/update-annee-scolaire.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AnneeScolairesResolver = class AnneeScolairesResolver {
    constructor(anneeScolairesService, prisma) {
        this.anneeScolairesService = anneeScolairesService;
        this.prisma = prisma;
    }
    createAnneeScolaire(args, user) {
        return this.anneeScolairesService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        affiliation;
        if (affiliation) {
            return this.anneeScolairesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.anneeScolairesService.findAll(args);
    }
    findOne(args) {
        return this.anneeScolairesService.findOne(args);
    }
    async updateAnneeScolaire(args, user) {
        const anneeScolaire = await this.prisma.anneeScolaire.findUnique({
            where: { id: args.id },
        });
        return this.anneeScolairesService.update(args);
    }
    async removeAnneeScolaire(args, user) {
        const anneeScolaire = await this.prisma.anneeScolaire.findUnique(args);
        return this.anneeScolairesService.remove(args);
    }
};
exports.AnneeScolairesResolver = AnneeScolairesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => annee_scolaire_entity_1.AnneeScolaire),
    __param(0, (0, graphql_1.Args)('createAnneeScolaireInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_annee_scolaire_input_1.CreateAnneeScolaireInput, Object]),
    __metadata("design:returntype", void 0)
], AnneeScolairesResolver.prototype, "createAnneeScolaire", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [annee_scolaire_entity_1.AnneeScolaire], { name: 'anneeScolaires' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyAnneeScolaireArgs, Object]),
    __metadata("design:returntype", Promise)
], AnneeScolairesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => annee_scolaire_entity_1.AnneeScolaire, { name: 'anneeScolaire' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAnneeScolaireArgs]),
    __metadata("design:returntype", void 0)
], AnneeScolairesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => annee_scolaire_entity_1.AnneeScolaire),
    __param(0, (0, graphql_1.Args)('updateAnneeScolaireInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_annee_scolaire_input_1.UpdateAnneeScolaireInput, Object]),
    __metadata("design:returntype", Promise)
], AnneeScolairesResolver.prototype, "updateAnneeScolaire", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => annee_scolaire_entity_1.AnneeScolaire),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAnneeScolaireArgs, Object]),
    __metadata("design:returntype", Promise)
], AnneeScolairesResolver.prototype, "removeAnneeScolaire", null);
exports.AnneeScolairesResolver = AnneeScolairesResolver = __decorate([
    (0, graphql_1.Resolver)(() => annee_scolaire_entity_1.AnneeScolaire),
    __metadata("design:paramtypes", [annee_scolaires_service_1.AnneeScolairesService,
        prisma_service_1.PrismaService])
], AnneeScolairesResolver);
//# sourceMappingURL=annee-scolaires.resolver.js.map