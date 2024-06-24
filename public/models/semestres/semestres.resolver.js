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
exports.SemestresResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const semestres_service_1 = require("./semestres.service");
const semestre_entity_1 = require("./entity/semestre.entity");
const find_args_1 = require("./dtos/find.args");
const create_semestre_input_1 = require("./dtos/create-semestre.input");
const update_semestre_input_1 = require("./dtos/update-semestre.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const unite_enseignement_entity_1 = require("../unite-enseignements/entity/unite-enseignement.entity");
let SemestresResolver = class SemestresResolver {
    constructor(semestresService, prisma) {
        this.semestresService = semestresService;
        this.prisma = prisma;
    }
    createSemestre(args, user) {
        return this.semestresService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            console.log("🚀 ~ SemestresResolver ~ affiliation:", affiliation);
            return this.semestresService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.semestresService.findAll(args);
    }
    findOne(args) {
        return this.semestresService.findOne(args);
    }
    async updateSemestre(args, user) {
        const semestre = await this.prisma.semestre.findUnique({
            where: { id: args.id },
        });
        return this.semestresService.update(args);
    }
    async removeSemestre(args, user) {
        const semestre = await this.prisma.semestre.findUnique(args);
        return this.semestresService.remove(args);
    }
    async uniteEnseignements(parent) {
        return this.prisma.uniteEnseignement.findMany({
            where: { semestreId: parent.id },
            orderBy: { id: 'asc' },
            include: {
                matieres: true,
            },
        });
    }
};
exports.SemestresResolver = SemestresResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => semestre_entity_1.Semestre),
    __param(0, (0, graphql_1.Args)('createSemestreInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_semestre_input_1.CreateSemestreInput, Object]),
    __metadata("design:returntype", void 0)
], SemestresResolver.prototype, "createSemestre", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [semestre_entity_1.Semestre], { name: 'semestres' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManySemestreArgs, Object]),
    __metadata("design:returntype", Promise)
], SemestresResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => semestre_entity_1.Semestre, { name: 'semestre' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSemestreArgs]),
    __metadata("design:returntype", void 0)
], SemestresResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => semestre_entity_1.Semestre),
    __param(0, (0, graphql_1.Args)('updateSemestreInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_semestre_input_1.UpdateSemestreInput, Object]),
    __metadata("design:returntype", Promise)
], SemestresResolver.prototype, "updateSemestre", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => semestre_entity_1.Semestre),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueSemestreArgs, Object]),
    __metadata("design:returntype", Promise)
], SemestresResolver.prototype, "removeSemestre", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [unite_enseignement_entity_1.UniteEnseignement]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [semestre_entity_1.Semestre]),
    __metadata("design:returntype", Promise)
], SemestresResolver.prototype, "uniteEnseignements", null);
exports.SemestresResolver = SemestresResolver = __decorate([
    (0, graphql_1.Resolver)(() => semestre_entity_1.Semestre),
    __metadata("design:paramtypes", [semestres_service_1.SemestresService,
        prisma_service_1.PrismaService])
], SemestresResolver);
//# sourceMappingURL=semestres.resolver.js.map