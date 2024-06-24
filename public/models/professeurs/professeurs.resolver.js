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
exports.ProfesseursResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const professeurs_service_1 = require("./professeurs.service");
const professeur_entity_1 = require("./entity/professeur.entity");
const find_args_1 = require("./dtos/find.args");
const create_professeur_input_1 = require("./dtos/create-professeur.input");
const update_professeur_input_1 = require("./dtos/update-professeur.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const utilisateur_entity_1 = require("../utilisateurs/entity/utilisateur.entity");
let ProfesseursResolver = class ProfesseursResolver {
    constructor(professeursService, prisma) {
        this.professeursService = professeursService;
        this.prisma = prisma;
    }
    createProfesseur(args, user) {
        return this.professeursService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.professeursService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.professeursService.findAll(args);
    }
    findOne(args) {
        return this.professeursService.findOne(args);
    }
    async updateProfesseur(args, user) {
        const professeur = await this.prisma.professeur.findUnique({
            where: { id: args.id },
        });
        return this.professeursService.update(args);
    }
    async removeProfesseur(args, user) {
        const professeur = await this.prisma.professeur.findUnique(args);
        return this.professeursService.remove(args);
    }
    async profile(parent) {
        if (!parent.profileId) {
            return {};
        }
        return this.prisma.utilisateur.findUnique({
            where: { id: parent.profileId },
        });
    }
};
exports.ProfesseursResolver = ProfesseursResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => professeur_entity_1.Professeur),
    __param(0, (0, graphql_1.Args)('createProfesseurInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_professeur_input_1.CreateProfesseurInput, Object]),
    __metadata("design:returntype", void 0)
], ProfesseursResolver.prototype, "createProfesseur", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [professeur_entity_1.Professeur], { name: 'professeurs' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyProfesseurArgs, Object]),
    __metadata("design:returntype", Promise)
], ProfesseursResolver.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => professeur_entity_1.Professeur, { name: 'professeur' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueProfesseurArgs]),
    __metadata("design:returntype", void 0)
], ProfesseursResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => professeur_entity_1.Professeur),
    __param(0, (0, graphql_1.Args)('updateProfesseurInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_professeur_input_1.UpdateProfesseurInput, Object]),
    __metadata("design:returntype", Promise)
], ProfesseursResolver.prototype, "updateProfesseur", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => professeur_entity_1.Professeur),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueProfesseurArgs, Object]),
    __metadata("design:returntype", Promise)
], ProfesseursResolver.prototype, "removeProfesseur", null);
__decorate([
    (0, graphql_1.ResolveField)(() => utilisateur_entity_1.Utilisateur),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [professeur_entity_1.Professeur]),
    __metadata("design:returntype", Promise)
], ProfesseursResolver.prototype, "profile", null);
exports.ProfesseursResolver = ProfesseursResolver = __decorate([
    (0, graphql_1.Resolver)(() => professeur_entity_1.Professeur),
    __metadata("design:paramtypes", [professeurs_service_1.ProfesseursService,
        prisma_service_1.PrismaService])
], ProfesseursResolver);
//# sourceMappingURL=professeurs.resolver.js.map