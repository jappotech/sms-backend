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
exports.BulletinNotesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const bulletin_notes_service_1 = require("./bulletin-notes.service");
const bulletin_notes_entity_1 = require("./entity/bulletin-notes.entity");
const find_args_1 = require("./dtos/find.args");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let BulletinNotesResolver = class BulletinNotesResolver {
    constructor(bulletinNotesService, prisma) {
        this.bulletinNotesService = bulletinNotesService;
        this.prisma = prisma;
    }
    semestriel(args) {
        return this.bulletinNotesService.bulletinSemestre(args);
    }
    annuel(args) {
        return this.bulletinNotesService.bulletinAnnuel(args);
    }
    validationAnneeScolaire(args) {
        return this.bulletinNotesService.resultatAnnuel(args);
    }
    validationSemestre(args) {
        return this.bulletinNotesService.resultatSemestre(args);
    }
    generateRandomNotes(args) {
        return this.bulletinNotesService.generateRandomNotes(args);
    }
};
exports.BulletinNotesResolver = BulletinNotesResolver;
__decorate([
    (0, graphql_1.Query)(() => bulletin_notes_entity_1.BulletinNotes, { name: 'bulletinNotesSemestre' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueBulletinNotesArgs]),
    __metadata("design:returntype", void 0)
], BulletinNotesResolver.prototype, "semestriel", null);
__decorate([
    (0, graphql_1.Query)(() => [bulletin_notes_entity_1.BulletinNotes], { name: 'bulletinNotesAnnuel' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueBulletinNotesAnnuelArgs]),
    __metadata("design:returntype", void 0)
], BulletinNotesResolver.prototype, "annuel", null);
__decorate([
    (0, graphql_1.Query)(() => bulletin_notes_entity_1.ResultatAnnuel, { name: 'bulletinNotesValidationAnnee' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueBulletinNotesAnnuelArgs]),
    __metadata("design:returntype", void 0)
], BulletinNotesResolver.prototype, "validationAnneeScolaire", null);
__decorate([
    (0, graphql_1.Query)(() => String, { name: 'bulletinNotesValidationSemestre' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueBulletinNotesArgs]),
    __metadata("design:returntype", void 0)
], BulletinNotesResolver.prototype, "validationSemestre", null);
__decorate([
    (0, graphql_1.Query)(() => [bulletin_notes_entity_1.BulletinNotes], { name: 'generateRandomNotes' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueBulletinNotesArgs]),
    __metadata("design:returntype", void 0)
], BulletinNotesResolver.prototype, "generateRandomNotes", null);
exports.BulletinNotesResolver = BulletinNotesResolver = __decorate([
    (0, graphql_1.Resolver)(() => bulletin_notes_entity_1.BulletinNotes),
    __metadata("design:paramtypes", [bulletin_notes_service_1.BulletinNotesService,
        prisma_service_1.PrismaService])
], BulletinNotesResolver);
//# sourceMappingURL=bulletin-notes.resolver.js.map