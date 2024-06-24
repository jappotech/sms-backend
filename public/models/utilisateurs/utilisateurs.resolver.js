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
exports.UtilisateursResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const utilisateurs_service_1 = require("./utilisateurs.service");
const utilisateur_entity_1 = require("./entity/utilisateur.entity");
const find_args_1 = require("./dtos/find.args");
const create_utilisateur_input_1 = require("./dtos/create-utilisateur.input");
const update_utilisateur_input_1 = require("./dtos/update-utilisateur.input");
const util_1 = require("../../common/auth/util");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const etablissement_entity_1 = require("../etablissements/entity/etablissement.entity");
const adresse_entity_1 = require("../adresses/entity/adresse.entity");
const contact_entity_1 = require("../contacts/entity/contact.entity");
let UtilisateursResolver = class UtilisateursResolver {
    constructor(utilisateursService, prisma) {
        this.utilisateursService = utilisateursService;
        this.prisma = prisma;
    }
    createUtilisateur(args, user) {
        return this.utilisateursService.create(args);
    }
    async findAll(args, user) {
        const affiliation = await (0, util_1.checkUserAffiliation)(user);
        if (affiliation) {
            return this.utilisateursService.findAllByEtablissement(args, affiliation.etablissementId);
        }
        return this.utilisateursService.findAll(args);
    }
    findOne(args) {
        return this.utilisateursService.findOne(args);
    }
    findMe(user) {
        console.log('🚀 ~ UtilisateursResolver ~ findMe ~ user:', user);
        return this.utilisateursService.findMe(user.uid);
    }
    async updateUtilisateur(args, user) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { id: args.id },
        });
        return this.utilisateursService.update(args);
    }
    async removeUtilisateur(args, user) {
        const utilisateur = await this.prisma.utilisateur.findUnique(args);
        return this.utilisateursService.remove(args);
    }
    async etablissement(parent) {
        if (!parent.etablissementId || parent.etablissementId === null) {
            return {};
        }
        return this.prisma.etablissement.findUnique({
            where: { id: parent.etablissementId },
        });
    }
    async adresse(parent) {
        if (!parent.adresseId || parent.adresseId === null) {
            return {};
        }
        return this.prisma.adresse.findUnique({
            where: { id: parent.adresseId },
        });
    }
    async contact(parent) {
        if (!parent.contactId || parent.contactId === null) {
            return {};
        }
        return this.prisma.contact.findUnique({
            where: { id: parent.contactId },
        });
    }
};
exports.UtilisateursResolver = UtilisateursResolver;
__decorate([
    (0, graphql_1.Mutation)(() => utilisateur_entity_1.Utilisateur),
    __param(0, (0, graphql_1.Args)('createUtilisateurInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilisateur_input_1.CreateUtilisateurInput, Object]),
    __metadata("design:returntype", void 0)
], UtilisateursResolver.prototype, "createUtilisateur", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => [utilisateur_entity_1.Utilisateur], { name: 'utilisateurs' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyUtilisateurArgs, Object]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "findAll", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => utilisateur_entity_1.Utilisateur, { name: 'utilisateur' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueUtilisateurArgs]),
    __metadata("design:returntype", void 0)
], UtilisateursResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Query)(() => utilisateur_entity_1.Utilisateur, { name: 'me' }),
    __param(0, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UtilisateursResolver.prototype, "findMe", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => utilisateur_entity_1.Utilisateur),
    __param(0, (0, graphql_1.Args)('updateUtilisateurInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_utilisateur_input_1.UpdateUtilisateurInput, Object]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "updateUtilisateur", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => utilisateur_entity_1.Utilisateur),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueUtilisateurArgs, Object]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "removeUtilisateur", null);
__decorate([
    (0, graphql_1.ResolveField)(() => etablissement_entity_1.Etablissement || null),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "etablissement", null);
__decorate([
    (0, graphql_1.ResolveField)(() => adresse_entity_1.Adresse || null),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "adresse", null);
__decorate([
    (0, graphql_1.ResolveField)(() => contact_entity_1.Contact || null),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", Promise)
], UtilisateursResolver.prototype, "contact", null);
exports.UtilisateursResolver = UtilisateursResolver = __decorate([
    (0, graphql_1.Resolver)(() => utilisateur_entity_1.Utilisateur),
    __metadata("design:paramtypes", [utilisateurs_service_1.UtilisateursService,
        prisma_service_1.PrismaService])
], UtilisateursResolver);
//# sourceMappingURL=utilisateurs.resolver.js.map