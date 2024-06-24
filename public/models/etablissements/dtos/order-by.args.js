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
exports.EtablissementOrderByRelationAggregateInput = exports.EtablissementOrderByWithRelationInput = exports.EtablissementOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../adresses/dtos/order-by.args");
const order_by_args_2 = require("../../classes/dtos/order-by.args");
const order_by_args_3 = require("../../contacts/dtos/order-by.args");
const order_by_args_4 = require("../../domaines/dtos/order-by.args");
const order_by_args_5 = require("../../salles/dtos/order-by.args");
const order_by_args_6 = require("../../utilisateurs/dtos/order-by.args");
let EtablissementOrderByWithRelationInputStrict = class EtablissementOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementOrderByWithRelationInputStrict = EtablissementOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtablissementOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtablissementOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtablissementOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtablissementOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "sigle", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "anneeEnCours", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtablissementOrderByWithRelationInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_1.AdresseOrderByWithRelationInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_3.ContactOrderByWithRelationInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_6.UtilisateurOrderByRelationAggregateInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_4.DomaineOrderByRelationAggregateInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "domaines", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_2.ClasseOrderByRelationAggregateInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "classes", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_5.SalleOrderByRelationAggregateInput)
], EtablissementOrderByWithRelationInputStrict.prototype, "salle", void 0);
exports.EtablissementOrderByWithRelationInputStrict = EtablissementOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EtablissementOrderByWithRelationInputStrict);
let EtablissementOrderByWithRelationInput = class EtablissementOrderByWithRelationInput extends (0, graphql_1.PartialType)(EtablissementOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementOrderByWithRelationInput = EtablissementOrderByWithRelationInput;
exports.EtablissementOrderByWithRelationInput = EtablissementOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], EtablissementOrderByWithRelationInput);
let EtablissementOrderByRelationAggregateInput = class EtablissementOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementOrderByRelationAggregateInput = EtablissementOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtablissementOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.EtablissementOrderByRelationAggregateInput = EtablissementOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], EtablissementOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map