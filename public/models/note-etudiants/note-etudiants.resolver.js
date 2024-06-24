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
exports.NoteEtudiantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const note_etudiants_service_1 = require("./note-etudiants.service");
const note_etudiant_entity_1 = require("./entity/note-etudiant.entity");
const find_args_1 = require("./dtos/find.args");
const create_note_etudiant_input_1 = require("./dtos/create-note-etudiant.input");
const update_note_etudiant_input_1 = require("./dtos/update-note-etudiant.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const etudiant_entity_1 = require("../etudiants/entity/etudiant.entity");
const evaluation_etudiants_entity_1 = require("../evaluation-etudiants/entity/evaluation-etudiants.entity");
let NoteEtudiantsResolver = class NoteEtudiantsResolver {
    constructor(noteEtudiantsService, prisma) {
        this.noteEtudiantsService = noteEtudiantsService;
        this.prisma = prisma;
    }
    createNoteEtudiant(args, user) {
        return this.noteEtudiantsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.noteEtudiantsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.noteEtudiantsService.findAll(args);
    }
    findOne(args) {
        return this.noteEtudiantsService.findOne(args);
    }
    async updateNoteEtudiant(args, user) {
        const noteEtudiant = await this.prisma.noteEtudiant.findUnique({
            where: { id: args.id },
        });
        return this.noteEtudiantsService.update(args);
    }
    async removeNoteEtudiant(args, user) {
        const noteEtudiant = await this.prisma.noteEtudiant.findUnique(args);
        return this.noteEtudiantsService.remove(args);
    }
    async etudiant(parent) {
        return this.prisma.etudiant.findUnique({
            where: { id: parent.etudiantId },
        });
    }
    async evaluation(parent) {
        return this.prisma.evaluationEtudiants.findUnique({
            where: { id: parent.evaluationEtudiantId },
        });
    }
};
exports.NoteEtudiantsResolver = NoteEtudiantsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => note_etudiant_entity_1.NoteEtudiant),
    __param(0, (0, graphql_1.Args)('createNoteEtudiantInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_etudiant_input_1.CreateNoteEtudiantInput, Object]),
    __metadata("design:returntype", void 0)
], NoteEtudiantsResolver.prototype, "createNoteEtudiant", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [note_etudiant_entity_1.NoteEtudiant], { name: 'noteEtudiants' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyNoteEtudiantArgs, Object]),
    __metadata("design:returntype", Promise)
], NoteEtudiantsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => note_etudiant_entity_1.NoteEtudiant, { name: 'noteEtudiant' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueNoteEtudiantArgs]),
    __metadata("design:returntype", void 0)
], NoteEtudiantsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => note_etudiant_entity_1.NoteEtudiant),
    __param(0, (0, graphql_1.Args)('updateNoteEtudiantInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_note_etudiant_input_1.UpdateNoteEtudiantInput, Object]),
    __metadata("design:returntype", Promise)
], NoteEtudiantsResolver.prototype, "updateNoteEtudiant", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => note_etudiant_entity_1.NoteEtudiant),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueNoteEtudiantArgs, Object]),
    __metadata("design:returntype", Promise)
], NoteEtudiantsResolver.prototype, "removeNoteEtudiant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => etudiant_entity_1.Etudiant),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_etudiant_entity_1.NoteEtudiant]),
    __metadata("design:returntype", Promise)
], NoteEtudiantsResolver.prototype, "etudiant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => evaluation_etudiants_entity_1.EvaluationEtudiants),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_etudiant_entity_1.NoteEtudiant]),
    __metadata("design:returntype", Promise)
], NoteEtudiantsResolver.prototype, "evaluation", null);
exports.NoteEtudiantsResolver = NoteEtudiantsResolver = __decorate([
    (0, graphql_1.Resolver)(() => note_etudiant_entity_1.NoteEtudiant),
    __metadata("design:paramtypes", [note_etudiants_service_1.NoteEtudiantsService,
        prisma_service_1.PrismaService])
], NoteEtudiantsResolver);
//# sourceMappingURL=note-etudiants.resolver.js.map