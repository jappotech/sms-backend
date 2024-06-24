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
exports.FeuillePresencesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const feuille_presences_service_1 = require("./feuille-presences.service");
const feuille_presence_entity_1 = require("./entity/feuille-presence.entity");
const find_args_1 = require("./dtos/find.args");
const create_feuille_presence_input_1 = require("./dtos/create-feuille-presence.input");
const update_feuille_presence_input_1 = require("./dtos/update-feuille-presence.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let FeuillePresencesResolver = class FeuillePresencesResolver {
    constructor(feuillePresencesService, prisma) {
        this.feuillePresencesService = feuillePresencesService;
        this.prisma = prisma;
    }
    createFeuillePresence(args, user) {
        return this.feuillePresencesService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.feuillePresencesService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.feuillePresencesService.findAll(args);
    }
    findOne(args) {
        return this.feuillePresencesService.findOne(args);
    }
    async updateFeuillePresence(args, user) {
        const feuillePresence = await this.prisma.feuillePresence.findUnique({
            where: { id: args.id },
        });
        return this.feuillePresencesService.update(args);
    }
    async removeFeuillePresence(args, user) {
        const feuillePresence = await this.prisma.feuillePresence.findUnique(args);
        return this.feuillePresencesService.remove(args);
    }
};
exports.FeuillePresencesResolver = FeuillePresencesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => feuille_presence_entity_1.FeuillePresence),
    __param(0, (0, graphql_1.Args)('createFeuillePresenceInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feuille_presence_input_1.CreateFeuillePresenceInput, Object]),
    __metadata("design:returntype", void 0)
], FeuillePresencesResolver.prototype, "createFeuillePresence", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [feuille_presence_entity_1.FeuillePresence], { name: 'feuillesPresences' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyFeuillePresenceArgs, Object]),
    __metadata("design:returntype", Promise)
], FeuillePresencesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => feuille_presence_entity_1.FeuillePresence, { name: 'feuillePresence' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueFeuillePresenceArgs]),
    __metadata("design:returntype", void 0)
], FeuillePresencesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => feuille_presence_entity_1.FeuillePresence),
    __param(0, (0, graphql_1.Args)('updateFeuillePresenceInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_feuille_presence_input_1.UpdateFeuillePresenceInput, Object]),
    __metadata("design:returntype", Promise)
], FeuillePresencesResolver.prototype, "updateFeuillePresence", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => feuille_presence_entity_1.FeuillePresence),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueFeuillePresenceArgs, Object]),
    __metadata("design:returntype", Promise)
], FeuillePresencesResolver.prototype, "removeFeuillePresence", null);
exports.FeuillePresencesResolver = FeuillePresencesResolver = __decorate([
    (0, graphql_1.Resolver)(() => feuille_presence_entity_1.FeuillePresence),
    __metadata("design:paramtypes", [feuille_presences_service_1.FeuillePresencesService,
        prisma_service_1.PrismaService])
], FeuillePresencesResolver);
//# sourceMappingURL=feuille-presences.resolver.js.map