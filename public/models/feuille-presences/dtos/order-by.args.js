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
exports.FeuillePresenceOrderByRelationAggregateInput = exports.FeuillePresenceOrderByWithRelationInput = exports.FeuillePresenceOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../cours/dtos/order-by.args");
const order_by_args_2 = require("../../etudiants/dtos/order-by.args");
let FeuillePresenceOrderByWithRelationInputStrict = class FeuillePresenceOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceOrderByWithRelationInputStrict = FeuillePresenceOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.CoursOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.CoursOrderByWithRelationInput)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.EtudiantOrderByWithRelationInput)
], FeuillePresenceOrderByWithRelationInputStrict.prototype, "etudiant", void 0);
exports.FeuillePresenceOrderByWithRelationInputStrict = FeuillePresenceOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceOrderByWithRelationInputStrict);
let FeuillePresenceOrderByWithRelationInput = class FeuillePresenceOrderByWithRelationInput extends (0, graphql_1.PartialType)(FeuillePresenceOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceOrderByWithRelationInput = FeuillePresenceOrderByWithRelationInput;
exports.FeuillePresenceOrderByWithRelationInput = FeuillePresenceOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceOrderByWithRelationInput);
let FeuillePresenceOrderByRelationAggregateInput = class FeuillePresenceOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceOrderByRelationAggregateInput = FeuillePresenceOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], FeuillePresenceOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.FeuillePresenceOrderByRelationAggregateInput = FeuillePresenceOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map