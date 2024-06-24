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
exports.ContactOrderByRelationAggregateInput = exports.ContactOrderByWithRelationInput = exports.ContactOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../etablissements/dtos/order-by.args");
const order_by_args_2 = require("../../reseau-socials/dtos/order-by.args");
const order_by_args_3 = require("../../utilisateurs/dtos/order-by.args");
let ContactOrderByWithRelationInputStrict = class ContactOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactOrderByWithRelationInputStrict = ContactOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByWithRelationInputStrict.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContactOrderByWithRelationInputStrict.prototype, "fix", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContactOrderByWithRelationInputStrict.prototype, "fax", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByWithRelationInputStrict.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContactOrderByWithRelationInputStrict.prototype, "siteWeb", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.ReseauSocialOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.ReseauSocialOrderByRelationAggregateInput)
], ContactOrderByWithRelationInputStrict.prototype, "reseauxSociaux", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.UtilisateurOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.UtilisateurOrderByRelationAggregateInput)
], ContactOrderByWithRelationInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.EtablissementOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.EtablissementOrderByRelationAggregateInput)
], ContactOrderByWithRelationInputStrict.prototype, "etablissements", void 0);
exports.ContactOrderByWithRelationInputStrict = ContactOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ContactOrderByWithRelationInputStrict);
let ContactOrderByWithRelationInput = class ContactOrderByWithRelationInput extends (0, graphql_1.PartialType)(ContactOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactOrderByWithRelationInput = ContactOrderByWithRelationInput;
exports.ContactOrderByWithRelationInput = ContactOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ContactOrderByWithRelationInput);
let ContactOrderByRelationAggregateInput = class ContactOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactOrderByRelationAggregateInput = ContactOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ContactOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ContactOrderByRelationAggregateInput = ContactOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ContactOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map