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
exports.DiplomesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const diplomes_service_1 = require("./diplomes.service");
const diplome_entity_1 = require("./entity/diplome.entity");
const find_args_1 = require("./dtos/find.args");
const create_diplome_input_1 = require("./dtos/create-diplome.input");
const update_diplome_input_1 = require("./dtos/update-diplome.input");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let DiplomesResolver = class DiplomesResolver {
    constructor(diplomesService, prisma) {
        this.diplomesService = diplomesService;
        this.prisma = prisma;
    }
    createDiplome(args, user) {
        return this.diplomesService.create(args);
    }
    async findAll(args, user) {
        return this.diplomesService.findAll(args);
    }
    findOne(args) {
        return this.diplomesService.findOne(args);
    }
    async updateDiplome(args, user) {
        const diplome = await this.prisma.diplome.findUnique({
            where: { id: args.id },
        });
        return this.diplomesService.update(args);
    }
    async removeDiplome(args, user) {
        const diplome = await this.prisma.diplome.findUnique(args);
        return this.diplomesService.remove(args);
    }
};
exports.DiplomesResolver = DiplomesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => diplome_entity_1.Diplome),
    __param(0, (0, graphql_1.Args)('createDiplomeInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_diplome_input_1.CreateDiplomeInput, Object]),
    __metadata("design:returntype", void 0)
], DiplomesResolver.prototype, "createDiplome", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [diplome_entity_1.Diplome], { name: 'diplomes' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyDiplomeArgs, Object]),
    __metadata("design:returntype", Promise)
], DiplomesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => diplome_entity_1.Diplome, { name: 'diplome' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueDiplomeArgs]),
    __metadata("design:returntype", void 0)
], DiplomesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => diplome_entity_1.Diplome),
    __param(0, (0, graphql_1.Args)('updateDiplomeInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_diplome_input_1.UpdateDiplomeInput, Object]),
    __metadata("design:returntype", Promise)
], DiplomesResolver.prototype, "updateDiplome", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => diplome_entity_1.Diplome),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueDiplomeArgs, Object]),
    __metadata("design:returntype", Promise)
], DiplomesResolver.prototype, "removeDiplome", null);
exports.DiplomesResolver = DiplomesResolver = __decorate([
    (0, graphql_1.Resolver)(() => diplome_entity_1.Diplome),
    __metadata("design:paramtypes", [diplomes_service_1.DiplomesService,
        prisma_service_1.PrismaService])
], DiplomesResolver);
//# sourceMappingURL=diplomes.resolver.js.map