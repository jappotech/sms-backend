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
exports.SalleOrderByRelationAggregateInput = exports.SalleOrderByWithRelationInput = exports.SalleOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../cours/dtos/order-by.args");
const order_by_args_2 = require("../../emploi-du-temps/dtos/order-by.args");
const order_by_args_3 = require("../../etablissements/dtos/order-by.args");
let SalleOrderByWithRelationInputStrict = class SalleOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleOrderByWithRelationInputStrict = SalleOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SalleOrderByWithRelationInputStrict.prototype, "capacite", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SalleOrderByWithRelationInputStrict.prototype, "batiment", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByWithRelationInputStrict.prototype, "estDisponible", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EtablissementOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EtablissementOrderByWithRelationInput)
], SalleOrderByWithRelationInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.CoursOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.CoursOrderByRelationAggregateInput)
], SalleOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput)
], SalleOrderByWithRelationInputStrict.prototype, "EmploiDuTemps", void 0);
exports.SalleOrderByWithRelationInputStrict = SalleOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SalleOrderByWithRelationInputStrict);
let SalleOrderByWithRelationInput = class SalleOrderByWithRelationInput extends (0, graphql_1.PartialType)(SalleOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleOrderByWithRelationInput = SalleOrderByWithRelationInput;
exports.SalleOrderByWithRelationInput = SalleOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], SalleOrderByWithRelationInput);
let SalleOrderByRelationAggregateInput = class SalleOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleOrderByRelationAggregateInput = SalleOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SalleOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.SalleOrderByRelationAggregateInput = SalleOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], SalleOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map