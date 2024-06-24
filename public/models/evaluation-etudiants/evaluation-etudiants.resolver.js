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
exports.EvaluationEtudiantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const evaluation_etudiants_service_1 = require("./evaluation-etudiants.service");
const evaluation_etudiants_entity_1 = require("./entity/evaluation-etudiants.entity");
const find_args_1 = require("./dtos/find.args");
const create_evaluation_etudiants_input_1 = require("./dtos/create-evaluation-etudiants.input");
const update_evaluation_etudiants_input_1 = require("./dtos/update-evaluation-etudiants.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const note_etudiant_entity_1 = require("../note-etudiants/entity/note-etudiant.entity");
const cours_entity_1 = require("../cours/entity/cours.entity");
let EvaluationEtudiantsResolver = class EvaluationEtudiantsResolver {
    constructor(evaluationEtudiantsService, prisma) {
        this.evaluationEtudiantsService = evaluationEtudiantsService;
        this.prisma = prisma;
    }
    createEvaluationEtudiants(args, user) {
        return this.evaluationEtudiantsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.evaluationEtudiantsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.evaluationEtudiantsService.findAll(args);
    }
    findOne(args) {
        return this.evaluationEtudiantsService.findOne(args);
    }
    async updateEvaluationEtudiants(args, user) {
        const evaluationEtudiants = await this.prisma.evaluationEtudiants.findUnique({
            where: { id: args.id },
        });
        return this.evaluationEtudiantsService.update(args);
    }
    async removeEvaluationEtudiants(args, user) {
        const evaluationEtudiants = await this.prisma.evaluationEtudiants.findUnique(args);
        return this.evaluationEtudiantsService.remove(args);
    }
    async NoteEtudiant(parent) {
        return this.prisma.noteEtudiant.findMany({
            where: { evaluationEtudiantId: parent.id },
        });
    }
    async Cours(parent) {
        return this.prisma.cours.findUnique({
            where: { id: parent.coursId },
        });
    }
};
exports.EvaluationEtudiantsResolver = EvaluationEtudiantsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => evaluation_etudiants_entity_1.EvaluationEtudiants),
    __param(0, (0, graphql_1.Args)('createEvaluationEtudiantsInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluation_etudiants_input_1.CreateEvaluationEtudiantsInput, Object]),
    __metadata("design:returntype", void 0)
], EvaluationEtudiantsResolver.prototype, "createEvaluationEtudiants", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [evaluation_etudiants_entity_1.EvaluationEtudiants], { name: 'evaluationsEtudiants' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyEvaluationEtudiantsArgs, Object]),
    __metadata("design:returntype", Promise)
], EvaluationEtudiantsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => evaluation_etudiants_entity_1.EvaluationEtudiants, { name: 'evaluationEtudiants' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEvaluationEtudiantsArgs]),
    __metadata("design:returntype", void 0)
], EvaluationEtudiantsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => evaluation_etudiants_entity_1.EvaluationEtudiants),
    __param(0, (0, graphql_1.Args)('updateEvaluationEtudiantsInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_evaluation_etudiants_input_1.UpdateEvaluationEtudiantsInput, Object]),
    __metadata("design:returntype", Promise)
], EvaluationEtudiantsResolver.prototype, "updateEvaluationEtudiants", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => evaluation_etudiants_entity_1.EvaluationEtudiants),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEvaluationEtudiantsArgs, Object]),
    __metadata("design:returntype", Promise)
], EvaluationEtudiantsResolver.prototype, "removeEvaluationEtudiants", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [note_etudiant_entity_1.NoteEtudiant]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluation_etudiants_entity_1.EvaluationEtudiants]),
    __metadata("design:returntype", Promise)
], EvaluationEtudiantsResolver.prototype, "NoteEtudiant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => cours_entity_1.Cours),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluation_etudiants_entity_1.EvaluationEtudiants]),
    __metadata("design:returntype", Promise)
], EvaluationEtudiantsResolver.prototype, "Cours", null);
exports.EvaluationEtudiantsResolver = EvaluationEtudiantsResolver = __decorate([
    (0, graphql_1.Resolver)(() => evaluation_etudiants_entity_1.EvaluationEtudiants),
    __metadata("design:paramtypes", [evaluation_etudiants_service_1.EvaluationEtudiantsService,
        prisma_service_1.PrismaService])
], EvaluationEtudiantsResolver);
//# sourceMappingURL=evaluation-etudiants.resolver.js.map