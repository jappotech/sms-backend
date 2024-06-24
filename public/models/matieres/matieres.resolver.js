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
exports.MatieresResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const matieres_service_1 = require("./matieres.service");
const matiere_entity_1 = require("./entity/matiere.entity");
const find_args_1 = require("./dtos/find.args");
const create_matiere_input_1 = require("./dtos/create-matiere.input");
const update_matiere_input_1 = require("./dtos/update-matiere.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const unite_enseignement_entity_1 = require("../unite-enseignements/entity/unite-enseignement.entity");
let MatieresResolver = class MatieresResolver {
    constructor(matieresService, prisma) {
        this.matieresService = matieresService;
        this.prisma = prisma;
    }
    createMatiere(args, user) {
        return this.matieresService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.matieresService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.matieresService.findAll(args);
    }
    findOne(args) {
        return this.matieresService.findOne(args);
    }
    async updateMatiere(args, user) {
        const matiere = await this.prisma.matiere.findUnique({
            where: { id: args.id },
        });
        return this.matieresService.update(args);
    }
    async removeMatiere(args, user) {
        const matiere = await this.prisma.matiere.findUnique(args);
        return this.matieresService.remove(args);
    }
    async uniteEnseignement(parent) {
        if (!parent.uniteEnseignementId) {
            return {};
        }
        return this.prisma.uniteEnseignement.findUnique({
            where: { id: parent.uniteEnseignementId },
        });
    }
};
exports.MatieresResolver = MatieresResolver;
__decorate([
    (0, graphql_1.Mutation)(() => matiere_entity_1.Matiere),
    __param(0, (0, graphql_1.Args)('createMatiereInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matiere_input_1.CreateMatiereInput, Object]),
    __metadata("design:returntype", void 0)
], MatieresResolver.prototype, "createMatiere", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [matiere_entity_1.Matiere], { name: 'matieres' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyMatiereArgs, Object]),
    __metadata("design:returntype", Promise)
], MatieresResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => matiere_entity_1.Matiere, { name: 'matiere' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueMatiereArgs]),
    __metadata("design:returntype", void 0)
], MatieresResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => matiere_entity_1.Matiere),
    __param(0, (0, graphql_1.Args)('updateMatiereInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_matiere_input_1.UpdateMatiereInput, Object]),
    __metadata("design:returntype", Promise)
], MatieresResolver.prototype, "updateMatiere", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => matiere_entity_1.Matiere),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueMatiereArgs, Object]),
    __metadata("design:returntype", Promise)
], MatieresResolver.prototype, "removeMatiere", null);
__decorate([
    (0, graphql_1.ResolveField)(() => unite_enseignement_entity_1.UniteEnseignement),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matiere_entity_1.Matiere]),
    __metadata("design:returntype", Promise)
], MatieresResolver.prototype, "uniteEnseignement", null);
exports.MatieresResolver = MatieresResolver = __decorate([
    (0, graphql_1.Resolver)(() => matiere_entity_1.Matiere),
    __metadata("design:paramtypes", [matieres_service_1.MatieresService,
        prisma_service_1.PrismaService])
], MatieresResolver);
//# sourceMappingURL=matieres.resolver.js.map