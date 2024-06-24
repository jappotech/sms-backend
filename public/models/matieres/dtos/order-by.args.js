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
exports.MatiereOrderByRelationAggregateInput = exports.MatiereOrderByWithRelationInput = exports.MatiereOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../cours/dtos/order-by.args");
const order_by_args_2 = require("../../unite-enseignements/dtos/order-by.args");
let MatiereOrderByWithRelationInputStrict = class MatiereOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereOrderByWithRelationInputStrict = MatiereOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "coefficient", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MatiereOrderByWithRelationInputStrict.prototype, "nbHeure", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByWithRelationInputStrict.prototype, "uniteEnseignementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.CoursOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.CoursOrderByRelationAggregateInput)
], MatiereOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.UniteEnseignementOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.UniteEnseignementOrderByWithRelationInput)
], MatiereOrderByWithRelationInputStrict.prototype, "uniteEnseignement", void 0);
exports.MatiereOrderByWithRelationInputStrict = MatiereOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], MatiereOrderByWithRelationInputStrict);
let MatiereOrderByWithRelationInput = class MatiereOrderByWithRelationInput extends (0, graphql_1.PartialType)(MatiereOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereOrderByWithRelationInput = MatiereOrderByWithRelationInput;
exports.MatiereOrderByWithRelationInput = MatiereOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], MatiereOrderByWithRelationInput);
let MatiereOrderByRelationAggregateInput = class MatiereOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereOrderByRelationAggregateInput = MatiereOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], MatiereOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.MatiereOrderByRelationAggregateInput = MatiereOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], MatiereOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map