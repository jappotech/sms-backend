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
exports.CoursResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cours_service_1 = require("./cours.service");
const cours_entity_1 = require("./entity/cours.entity");
const find_args_1 = require("./dtos/find.args");
const create_cours_input_1 = require("./dtos/create-cours.input");
const update_cours_input_1 = require("./dtos/update-cours.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const matiere_entity_1 = require("../matieres/entity/matiere.entity");
const classe_entity_1 = require("../classes/entity/classe.entity");
const salle_entity_1 = require("../salles/entity/salle.entity");
const professeur_entity_1 = require("../professeurs/entity/professeur.entity");
let CoursResolver = class CoursResolver {
    constructor(coursService, prisma) {
        this.coursService = coursService;
        this.prisma = prisma;
    }
    createCours(args, user) {
        return this.coursService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.coursService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.coursService.findAll(args);
    }
    findOne(args) {
        return this.coursService.findOne(args);
    }
    async updateCours(args, user) {
        const cours = await this.prisma.cours.findUnique({
            where: { id: args.id },
        });
        return this.coursService.update(args);
    }
    async removeCours(args, user) {
        const cours = await this.prisma.cours.findUnique(args);
        return this.coursService.remove(args);
    }
    async matiere(parent) {
        if (!parent.matiereId)
            return {};
        return this.prisma.matiere.findUnique({
            where: {
                id: parent.matiereId,
            },
            include: {
                uniteEnseignement: true,
            },
        });
    }
    async classe(parent) {
        if (!parent.classeId)
            return {};
        return this.prisma.classe.findUnique({
            where: {
                id: parent.classeId,
            },
        });
    }
    async salle(parent) {
        if (!parent.salleId)
            return {};
        return this.prisma.salle.findUnique({
            where: {
                id: parent.salleId,
            },
        });
    }
    async professeur(parent) {
        if (!parent.professeurId)
            return {};
        return this.prisma.professeur.findUnique({
            where: {
                id: parent.professeurId,
            },
        });
    }
};
exports.CoursResolver = CoursResolver;
__decorate([
    (0, graphql_1.Mutation)(() => cours_entity_1.Cours),
    __param(0, (0, graphql_1.Args)('createCoursInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cours_input_1.CreateCoursInput, Object]),
    __metadata("design:returntype", void 0)
], CoursResolver.prototype, "createCours", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [cours_entity_1.Cours], { name: 'all_cours' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyCoursArgs, Object]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => cours_entity_1.Cours, { name: 'cours' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueCoursArgs]),
    __metadata("design:returntype", void 0)
], CoursResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => cours_entity_1.Cours),
    __param(0, (0, graphql_1.Args)('updateCoursInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cours_input_1.UpdateCoursInput, Object]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "updateCours", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => cours_entity_1.Cours),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueCoursArgs, Object]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "removeCours", null);
__decorate([
    (0, graphql_1.ResolveField)(() => matiere_entity_1.Matiere),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cours_entity_1.Cours]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "matiere", null);
__decorate([
    (0, graphql_1.ResolveField)(() => classe_entity_1.Classe),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cours_entity_1.Cours]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "classe", null);
__decorate([
    (0, graphql_1.ResolveField)(() => salle_entity_1.Salle),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cours_entity_1.Cours]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "salle", null);
__decorate([
    (0, graphql_1.ResolveField)(() => professeur_entity_1.Professeur),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cours_entity_1.Cours]),
    __metadata("design:returntype", Promise)
], CoursResolver.prototype, "professeur", null);
exports.CoursResolver = CoursResolver = __decorate([
    (0, graphql_1.Resolver)(() => cours_entity_1.Cours),
    __metadata("design:paramtypes", [cours_service_1.CoursService,
        prisma_service_1.PrismaService])
], CoursResolver);
//# sourceMappingURL=cours.resolver.js.map