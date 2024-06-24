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
exports.MentionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mentions_service_1 = require("./mentions.service");
const mention_entity_1 = require("./entity/mention.entity");
const find_args_1 = require("./dtos/find.args");
const create_mention_input_1 = require("./dtos/create-mention.input");
const update_mention_input_1 = require("./dtos/update-mention.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const specialite_entity_1 = require("../specialites/entity/specialite.entity");
const domaine_entity_1 = require("../domaines/entity/domaine.entity");
let MentionsResolver = class MentionsResolver {
    constructor(mentionsService, prisma) {
        this.mentionsService = mentionsService;
        this.prisma = prisma;
    }
    createMention(args, user) {
        return this.mentionsService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.mentionsService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.mentionsService.findAll(args);
    }
    findOne(args) {
        return this.mentionsService.findOne(args);
    }
    async updateMention(args, user) {
        const mention = await this.prisma.mention.findUnique({
            where: { id: args.id },
        });
        return this.mentionsService.update(args);
    }
    async removeMention(args, user) {
        const mention = await this.prisma.mention.findUnique(args);
        return this.mentionsService.remove(args);
    }
    async specialites(parent, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        return this.prisma.specialite.findMany({
            where: {
                AND: [
                    {
                        mention: {
                            id: parent.id,
                        },
                    },
                    {
                        etablissementId: affiliation.etablissementId,
                    },
                ],
            },
        });
    }
    async domaine(parent) {
        return this.prisma.domaine.findUnique({
            where: { id: parent.domaineId },
        });
    }
};
exports.MentionsResolver = MentionsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => mention_entity_1.Mention),
    __param(0, (0, graphql_1.Args)('createMentionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mention_input_1.CreateMentionInput, Object]),
    __metadata("design:returntype", void 0)
], MentionsResolver.prototype, "createMention", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [mention_entity_1.Mention], { name: 'mentions' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyMentionArgs, Object]),
    __metadata("design:returntype", Promise)
], MentionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => mention_entity_1.Mention, { name: 'mention' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueMentionArgs]),
    __metadata("design:returntype", void 0)
], MentionsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => mention_entity_1.Mention),
    __param(0, (0, graphql_1.Args)('updateMentionInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_mention_input_1.UpdateMentionInput, Object]),
    __metadata("design:returntype", Promise)
], MentionsResolver.prototype, "updateMention", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => mention_entity_1.Mention),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueMentionArgs, Object]),
    __metadata("design:returntype", Promise)
], MentionsResolver.prototype, "removeMention", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.ResolveField)(() => [specialite_entity_1.Specialite]),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mention_entity_1.Mention, Object]),
    __metadata("design:returntype", Promise)
], MentionsResolver.prototype, "specialites", null);
__decorate([
    (0, graphql_1.ResolveField)(() => domaine_entity_1.Domaine),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mention_entity_1.Mention]),
    __metadata("design:returntype", Promise)
], MentionsResolver.prototype, "domaine", null);
exports.MentionsResolver = MentionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => mention_entity_1.Mention),
    __metadata("design:paramtypes", [mentions_service_1.MentionsService,
        prisma_service_1.PrismaService])
], MentionsResolver);
//# sourceMappingURL=mentions.resolver.js.map