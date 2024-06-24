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
exports.AdressesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const adresses_service_1 = require("./adresses.service");
const adresse_entity_1 = require("./entity/adresse.entity");
const find_args_1 = require("./dtos/find.args");
const create_adresse_input_1 = require("./dtos/create-adresse.input");
const update_adresse_input_1 = require("./dtos/update-adresse.input");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AdressesResolver = class AdressesResolver {
    constructor(adressesService, prisma) {
        this.adressesService = adressesService;
        this.prisma = prisma;
    }
    createAdresse(args, user) {
        return this.adressesService.create(args);
    }
    findAll(args) {
        return this.adressesService.findAll(args);
    }
    findOne(args) {
        return this.adressesService.findOne(args);
    }
    async updateAdresse(args, user) {
        const adresse = await this.prisma.adresse.findUnique({
            where: { id: args.id },
        });
        return this.adressesService.update(args);
    }
    async removeAdresse(args, user) {
        const adresse = await this.prisma.adresse.findUnique(args);
        return this.adressesService.remove(args);
    }
};
exports.AdressesResolver = AdressesResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => adresse_entity_1.Adresse),
    __param(0, (0, graphql_1.Args)('createAdresseInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adresse_input_1.CreateAdresseInput, Object]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "createAdresse", null);
__decorate([
    (0, graphql_1.Query)(() => [adresse_entity_1.Adresse], { name: 'adresses' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyAdresseArgs]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => adresse_entity_1.Adresse, { name: 'adresse' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAdresseArgs]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => adresse_entity_1.Adresse),
    __param(0, (0, graphql_1.Args)('updateAdresseInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_adresse_input_1.UpdateAdresseInput, Object]),
    __metadata("design:returntype", Promise)
], AdressesResolver.prototype, "updateAdresse", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => adresse_entity_1.Adresse),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueAdresseArgs, Object]),
    __metadata("design:returntype", Promise)
], AdressesResolver.prototype, "removeAdresse", null);
exports.AdressesResolver = AdressesResolver = __decorate([
    (0, graphql_1.Resolver)(() => adresse_entity_1.Adresse),
    __metadata("design:paramtypes", [adresses_service_1.AdressesService,
        prisma_service_1.PrismaService])
], AdressesResolver);
//# sourceMappingURL=adresses.resolver.js.map