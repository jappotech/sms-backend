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
exports.ReseauSocialsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reseau_socials_service_1 = require("./reseau-socials.service");
const reseau_social_entity_1 = require("./entity/reseau-social.entity");
const find_args_1 = require("./dtos/find.args");
const create_reseau_social_input_1 = require("./dtos/create-reseau-social.input");
const update_reseau_social_input_1 = require("./dtos/update-reseau-social.input");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let ReseauSocialsResolver = class ReseauSocialsResolver {
    constructor(reseauSocialsService, prisma) {
        this.reseauSocialsService = reseauSocialsService;
        this.prisma = prisma;
    }
    createReseauSocial(args, user) {
        return this.reseauSocialsService.create(args);
    }
    findAll(args) {
        return this.reseauSocialsService.findAll(args);
    }
    findOne(args) {
        return this.reseauSocialsService.findOne(args);
    }
    async updateReseauSocial(args, user) {
        const reseauSocial = await this.prisma.reseauSocial.findUnique({
            where: { id: args.id },
        });
        return this.reseauSocialsService.update(args);
    }
    async removeReseauSocial(args, user) {
        const reseauSocial = await this.prisma.reseauSocial.findUnique(args);
        return this.reseauSocialsService.remove(args);
    }
};
exports.ReseauSocialsResolver = ReseauSocialsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => reseau_social_entity_1.ReseauSocial),
    __param(0, (0, graphql_1.Args)('createReseauSocialInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reseau_social_input_1.CreateReseauSocialInput, Object]),
    __metadata("design:returntype", void 0)
], ReseauSocialsResolver.prototype, "createReseauSocial", null);
__decorate([
    (0, graphql_1.Query)(() => [reseau_social_entity_1.ReseauSocial], { name: 'reseauSociaux' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyReseauSocialArgs]),
    __metadata("design:returntype", void 0)
], ReseauSocialsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => reseau_social_entity_1.ReseauSocial, { name: 'reseauSocial' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueReseauSocialArgs]),
    __metadata("design:returntype", void 0)
], ReseauSocialsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => reseau_social_entity_1.ReseauSocial),
    __param(0, (0, graphql_1.Args)('updateReseauSocialInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reseau_social_input_1.UpdateReseauSocialInput, Object]),
    __metadata("design:returntype", Promise)
], ReseauSocialsResolver.prototype, "updateReseauSocial", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => reseau_social_entity_1.ReseauSocial),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueReseauSocialArgs, Object]),
    __metadata("design:returntype", Promise)
], ReseauSocialsResolver.prototype, "removeReseauSocial", null);
exports.ReseauSocialsResolver = ReseauSocialsResolver = __decorate([
    (0, graphql_1.Resolver)(() => reseau_social_entity_1.ReseauSocial),
    __metadata("design:paramtypes", [reseau_socials_service_1.ReseauSocialsService,
        prisma_service_1.PrismaService])
], ReseauSocialsResolver);
//# sourceMappingURL=reseau-socials.resolver.js.map