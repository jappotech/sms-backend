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
exports.DiplomeOrderByRelationAggregateInput = exports.DiplomeOrderByWithRelationInput = exports.DiplomeOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../inscriptions/dtos/order-by.args");
const order_by_args_2 = require("../../specialites/dtos/order-by.args");
let DiplomeOrderByWithRelationInputStrict = class DiplomeOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeOrderByWithRelationInputStrict = DiplomeOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "finalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "entite", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "habilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "partenaires", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "dateHabilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "dateEcheance", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByWithRelationInputStrict.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DiplomeOrderByWithRelationInputStrict.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.InscriptionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.InscriptionOrderByRelationAggregateInput)
], DiplomeOrderByWithRelationInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.SpecialiteOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.SpecialiteOrderByWithRelationInput)
], DiplomeOrderByWithRelationInputStrict.prototype, "specialite", void 0);
exports.DiplomeOrderByWithRelationInputStrict = DiplomeOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], DiplomeOrderByWithRelationInputStrict);
let DiplomeOrderByWithRelationInput = class DiplomeOrderByWithRelationInput extends (0, graphql_1.PartialType)(DiplomeOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeOrderByWithRelationInput = DiplomeOrderByWithRelationInput;
exports.DiplomeOrderByWithRelationInput = DiplomeOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], DiplomeOrderByWithRelationInput);
let DiplomeOrderByRelationAggregateInput = class DiplomeOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeOrderByRelationAggregateInput = DiplomeOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DiplomeOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.DiplomeOrderByRelationAggregateInput = DiplomeOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], DiplomeOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map