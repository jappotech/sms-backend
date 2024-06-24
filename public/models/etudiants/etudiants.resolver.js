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
exports.EtudiantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const etudiants_service_1 = require("./etudiants.service");
const etudiant_entity_1 = require("./entity/etudiant.entity");
const find_args_1 = require("./dtos/find.args");
const create_etudiant_input_1 = require("./dtos/create-etudiant.input");
const update_etudiant_input_1 = require("./dtos/update-etudiant.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const utilisateur_entity_1 = require("../utilisateurs/entity/utilisateur.entity");
const note_etudiant_entity_1 = require("../note-etudiants/entity/note-etudiant.entity");
const inscription_entity_1 = require("../inscriptions/entity/inscription.entity");
let EtudiantsResolver = class EtudiantsResolver {
    constructor(etudiantsService, prisma) {
        this.etudiantsService = etudiantsService;
        this.prisma = prisma;
    }
    createEtudiant(args, user) {
        return this.etudiantsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.etudiantsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.etudiantsService.findAll(args);
    }
    findOne(args) {
        return this.etudiantsService.findOne(args);
    }
    async updateEtudiant(args, user) {
        const etudiant = await this.prisma.etudiant.findUnique({
            where: { id: args.id },
        });
        return this.etudiantsService.update(args);
    }
    async removeEtudiant(args, user) {
        const etudiant = await this.prisma.etudiant.findUnique(args);
        return this.etudiantsService.remove(args);
    }
    async profile(parent) {
        if (!parent.profileId || parent.profileId === null) {
            return null;
        }
        return this.prisma.utilisateur.findUnique({
            where: { id: parent.profileId },
        });
    }
    async notes(parent) {
        return this.prisma.noteEtudiant.findMany({
            where: { etudiantId: parent.id },
        });
    }
    async inscriptions(parent) {
        return this.prisma.inscription.findMany({
            where: { etudiantId: parent.id },
        });
    }
};
exports.EtudiantsResolver = EtudiantsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => etudiant_entity_1.Etudiant),
    __param(0, (0, graphql_1.Args)('createEtudiantInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_input_1.CreateEtudiantInput, Object]),
    __metadata("design:returntype", void 0)
], EtudiantsResolver.prototype, "createEtudiant", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [etudiant_entity_1.Etudiant], { name: 'etudiants' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyEtudiantArgs, Object]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => etudiant_entity_1.Etudiant, { name: 'etudiant' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEtudiantArgs]),
    __metadata("design:returntype", void 0)
], EtudiantsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => etudiant_entity_1.Etudiant),
    __param(0, (0, graphql_1.Args)('updateEtudiantInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_etudiant_input_1.UpdateEtudiantInput, Object]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "updateEtudiant", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => etudiant_entity_1.Etudiant),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueEtudiantArgs, Object]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "removeEtudiant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => utilisateur_entity_1.Utilisateur),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etudiant_entity_1.Etudiant]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "profile", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [note_etudiant_entity_1.NoteEtudiant]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etudiant_entity_1.Etudiant]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "notes", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [inscription_entity_1.Inscription]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etudiant_entity_1.Etudiant]),
    __metadata("design:returntype", Promise)
], EtudiantsResolver.prototype, "inscriptions", null);
exports.EtudiantsResolver = EtudiantsResolver = __decorate([
    (0, graphql_1.Resolver)(() => etudiant_entity_1.Etudiant),
    __metadata("design:paramtypes", [etudiants_service_1.EtudiantsService,
        prisma_service_1.PrismaService])
], EtudiantsResolver);
//# sourceMappingURL=etudiants.resolver.js.map