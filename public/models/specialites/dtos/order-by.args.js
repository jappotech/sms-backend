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
exports.SpecialiteOrderByRelationAggregateInput = exports.SpecialiteOrderByWithRelationInput = exports.SpecialiteOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../diplomes/dtos/order-by.args");
const order_by_args_3 = require("../../mentions/dtos/order-by.args");
let SpecialiteOrderByWithRelationInputStrict = class SpecialiteOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteOrderByWithRelationInputStrict = SpecialiteOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SpecialiteOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SpecialiteOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SpecialiteOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SpecialiteOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", Object)
], SpecialiteOrderByWithRelationInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", Object)
], SpecialiteOrderByWithRelationInputStrict.prototype, "mentionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.MentionOrderByWithRelationInput, {}),
    __metadata("design:type", order_by_args_3.MentionOrderByWithRelationInput)
], SpecialiteOrderByWithRelationInputStrict.prototype, "mention", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ClasseOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_1.ClasseOrderByRelationAggregateInput)
], SpecialiteOrderByWithRelationInputStrict.prototype, "Classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.DiplomeOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_2.DiplomeOrderByRelationAggregateInput)
], SpecialiteOrderByWithRelationInputStrict.prototype, "Diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", Object)
], SpecialiteOrderByWithRelationInputStrict.prototype, "etablissementId", void 0);
exports.SpecialiteOrderByWithRelationInputStrict = SpecialiteOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteOrderByWithRelationInputStrict);
let SpecialiteOrderByWithRelationInput = class SpecialiteOrderByWithRelationInput extends (0, graphql_1.PartialType)(SpecialiteOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteOrderByWithRelationInput = SpecialiteOrderByWithRelationInput;
exports.SpecialiteOrderByWithRelationInput = SpecialiteOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteOrderByWithRelationInput);
let SpecialiteOrderByRelationAggregateInput = class SpecialiteOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteOrderByRelationAggregateInput = SpecialiteOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SpecialiteOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.SpecialiteOrderByRelationAggregateInput = SpecialiteOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map