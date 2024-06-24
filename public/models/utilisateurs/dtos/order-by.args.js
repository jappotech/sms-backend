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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurOrderByRelationAggregateInput = exports.UtilisateurOrderByWithRelationInput = exports.UtilisateurOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../adresses/dtos/order-by.args");
const order_by_args_2 = require("../../contacts/dtos/order-by.args");
const order_by_args_3 = require("../../etablissements/dtos/order-by.args");
const order_by_args_4 = require("../../etudiants/dtos/order-by.args");
const order_by_args_5 = require("../../permissions/dtos/order-by.args");
const order_by_args_6 = require("../../professeurs/dtos/order-by.args");
let UtilisateurOrderByWithRelationInputStrict = class UtilisateurOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurOrderByWithRelationInputStrict = UtilisateurOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "prenom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "dateNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "lieuNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "cni", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "nationalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "groupeSanguin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "statutCompte", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInputStrict.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInputStrict.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.ContactOrderByWithRelationInput, {}),
    __metadata("design:type", order_by_args_2.ContactOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.AdresseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.AdresseOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EtablissementOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EtablissementOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.EtudiantOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_5.PermissionOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_5.PermissionOrderByRelationAggregateInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_6.ProfesseurOrderByWithRelationInput, {}),
    __metadata("design:type", order_by_args_6.ProfesseurOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInputStrict.prototype, "Professeur", void 0);
exports.UtilisateurOrderByWithRelationInputStrict = UtilisateurOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurOrderByWithRelationInputStrict);
let UtilisateurOrderByWithRelationInput = class UtilisateurOrderByWithRelationInput extends (0, graphql_1.PartialType)(UtilisateurOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurOrderByWithRelationInput = UtilisateurOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "prenom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "dateNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "lieuNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "cni", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "nationalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "groupeSanguin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "statutCompte", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByWithRelationInput.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurOrderByWithRelationInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.ContactOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.ContactOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInput.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.AdresseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.AdresseOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInput.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EtablissementOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EtablissementOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInput.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.EtudiantOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_5.PermissionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_5.PermissionOrderByRelationAggregateInput)
], UtilisateurOrderByWithRelationInput.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_6.ProfesseurOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_6.ProfesseurOrderByWithRelationInput)
], UtilisateurOrderByWithRelationInput.prototype, "Professeur", void 0);
exports.UtilisateurOrderByWithRelationInput = UtilisateurOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurOrderByWithRelationInput);
let UtilisateurOrderByRelationAggregateInput = class UtilisateurOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurOrderByRelationAggregateInput = UtilisateurOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.UtilisateurOrderByRelationAggregateInput = UtilisateurOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map