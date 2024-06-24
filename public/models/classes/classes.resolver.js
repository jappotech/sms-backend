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
exports.ClassesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const classes_service_1 = require("./classes.service");
const classe_entity_1 = require("./entity/classe.entity");
const find_args_1 = require("./dtos/find.args");
const create_classe_input_1 = require("./dtos/create-classe.input");
const update_classe_input_1 = require("./dtos/update-classe.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const semestre_entity_1 = require("../semestres/entity/semestre.entity");
const inscription_entity_1 = require("../inscriptions/entity/inscription.entity");
const evaluation_etudiants_entity_1 = require("../evaluation-etudiants/entity/evaluation-etudiants.entity");
const annee_scolaire_entity_1 = require("../annee-scolaires/entity/annee-scolaire.entity");
const specialite_entity_1 = require("../specialites/entity/specialite.entity");
const cours_entity_1 = require("../cours/entity/cours.entity");
let ClassesResolver = class ClassesResolver {
    constructor(classesService, prisma) {
        this.classesService = classesService;
        this.prisma = prisma;
    }
    createClasse(args, user) {
        return this.classesService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.classesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.classesService.findAll(args);
    }
    findOne(args) {
        return this.classesService.findOne(args);
    }
    async updateClasse(args, user) {
        const classe = await this.prisma.classe.findUnique({
            where: { id: args.id },
        });
        return this.classesService.update(args);
    }
    async removeClasse(args, user) {
        const classe = await this.prisma.classe.findUnique(args);
        return this.classesService.remove(args);
    }
    async semestres(parent) {
        return this.prisma.semestre.findMany({
            where: { classeId: parent.id },
            include: {
                uniteEnseignement: {
                    include: {
                        matieres: true,
                    },
                },
            },
        });
    }
    async inscriptions(parent) {
        return this.prisma.inscription.findMany({
            where: { classeId: parent.id },
            include: { etudiant: true },
        });
    }
    async evaluations(parent) {
        const cours = await this.prisma.cours.findMany({
            where: { classeId: parent.id },
        });
        const evaluationEtudiants = [];
        for (const cour of cours) {
            const evaluationEtudiant = await this.prisma.evaluationEtudiants.findMany({
                where: { coursId: cour.id },
            });
            evaluationEtudiants.push(evaluationEtudiant);
        }
        return new Promise((resolve, reject) => {
            resolve(evaluationEtudiants);
            reject([]);
        });
    }
    async anneeScolaire(parent) {
        if (!parent.anneeScolaireId) {
            return {};
        }
        return this.prisma.anneeScolaire.findUnique({
            where: { id: parent.anneeScolaireId },
        });
    }
    async specialite(parent) {
        if (!parent.specialiteId) {
            return {};
        }
        return this.prisma.specialite.findUnique({
            where: { id: parent.specialiteId },
        });
    }
    async cours(parent) {
        return this.prisma.cours.findMany({
            where: { classeId: parent.id },
        });
    }
};
exports.ClassesResolver = ClassesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => classe_entity_1.Classe),
    __param(0, (0, graphql_1.Args)('createClasseInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_classe_input_1.CreateClasseInput, Object]),
    __metadata("design:returntype", void 0)
], ClassesResolver.prototype, "createClasse", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [classe_entity_1.Classe], { name: 'classes' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyClasseArgs, Object]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => classe_entity_1.Classe, { name: 'classe' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueClasseArgs]),
    __metadata("design:returntype", void 0)
], ClassesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => classe_entity_1.Classe),
    __param(0, (0, graphql_1.Args)('updateClasseInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_classe_input_1.UpdateClasseInput, Object]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "updateClasse", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => classe_entity_1.Classe),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueClasseArgs, Object]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "removeClasse", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [semestre_entity_1.Semestre]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "semestres", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [inscription_entity_1.Inscription]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "inscriptions", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [evaluation_etudiants_entity_1.EvaluationEtudiants]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "evaluations", null);
__decorate([
    (0, graphql_1.ResolveField)(() => annee_scolaire_entity_1.AnneeScolaire),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "anneeScolaire", null);
__decorate([
    (0, graphql_1.ResolveField)(() => specialite_entity_1.Specialite),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "specialite", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [cours_entity_1.Cours]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_entity_1.Classe]),
    __metadata("design:returntype", Promise)
], ClassesResolver.prototype, "cours", null);
exports.ClassesResolver = ClassesResolver = __decorate([
    (0, graphql_1.Resolver)(() => classe_entity_1.Classe),
    __metadata("design:paramtypes", [classes_service_1.ClassesService,
        prisma_service_1.PrismaService])
], ClassesResolver);
//# sourceMappingURL=classes.resolver.js.map