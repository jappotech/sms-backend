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
exports.MentionOrderByRelationAggregateInput = exports.MentionOrderByWithRelationInput = exports.MentionOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../domaines/dtos/order-by.args");
const order_by_args_2 = require("../../specialites/dtos/order-by.args");
let MentionOrderByWithRelationInputStrict = class MentionOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionOrderByWithRelationInputStrict = MentionOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MentionOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MentionOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MentionOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MentionOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MentionOrderByWithRelationInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MentionOrderByWithRelationInputStrict.prototype, "domaineId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.DomaineOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.DomaineOrderByWithRelationInput)
], MentionOrderByWithRelationInputStrict.prototype, "domaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.SpecialiteOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.SpecialiteOrderByRelationAggregateInput)
], MentionOrderByWithRelationInputStrict.prototype, "specialites", void 0);
exports.MentionOrderByWithRelationInputStrict = MentionOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], MentionOrderByWithRelationInputStrict);
let MentionOrderByWithRelationInput = class MentionOrderByWithRelationInput extends (0, graphql_1.PartialType)(MentionOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionOrderByWithRelationInput = MentionOrderByWithRelationInput;
exports.MentionOrderByWithRelationInput = MentionOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], MentionOrderByWithRelationInput);
let MentionOrderByRelationAggregateInput = class MentionOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionOrderByRelationAggregateInput = MentionOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MentionOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.MentionOrderByRelationAggregateInput = MentionOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], MentionOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map