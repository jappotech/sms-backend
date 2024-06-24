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
exports.DomaineOrderByRelationAggregateInput = exports.DomaineOrderByWithRelationInput = exports.DomaineOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../etablissements/dtos/order-by.args");
const order_by_args_2 = require("../../mentions/dtos/order-by.args");
let DomaineOrderByWithRelationInputStrict = class DomaineOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineOrderByWithRelationInputStrict = DomaineOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DomaineOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DomaineOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DomaineOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DomaineOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DomaineOrderByWithRelationInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.EtablissementOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.EtablissementOrderByRelationAggregateInput)
], DomaineOrderByWithRelationInputStrict.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.MentionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.MentionOrderByRelationAggregateInput)
], DomaineOrderByWithRelationInputStrict.prototype, "mentions", void 0);
exports.DomaineOrderByWithRelationInputStrict = DomaineOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], DomaineOrderByWithRelationInputStrict);
let DomaineOrderByWithRelationInput = class DomaineOrderByWithRelationInput extends (0, graphql_1.PartialType)(DomaineOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineOrderByWithRelationInput = DomaineOrderByWithRelationInput;
exports.DomaineOrderByWithRelationInput = DomaineOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], DomaineOrderByWithRelationInput);
let DomaineOrderByRelationAggregateInput = class DomaineOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineOrderByRelationAggregateInput = DomaineOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], DomaineOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.DomaineOrderByRelationAggregateInput = DomaineOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], DomaineOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map