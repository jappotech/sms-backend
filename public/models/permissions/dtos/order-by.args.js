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
exports.PermissionOrderByRelationAggregateInput = exports.PermissionOrderByWithRelationInput = exports.PermissionOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../utilisateurs/dtos/order-by.args");
let PermissionOrderByWithRelationInputStrict = class PermissionOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionOrderByWithRelationInputStrict = PermissionOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByWithRelationInputStrict.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByWithRelationInputStrict.prototype, "label", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PermissionOrderByWithRelationInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.UtilisateurOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.UtilisateurOrderByRelationAggregateInput)
], PermissionOrderByWithRelationInputStrict.prototype, "utilisateurs", void 0);
exports.PermissionOrderByWithRelationInputStrict = PermissionOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], PermissionOrderByWithRelationInputStrict);
let PermissionOrderByWithRelationInput = class PermissionOrderByWithRelationInput extends (0, graphql_1.PartialType)(PermissionOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionOrderByWithRelationInput = PermissionOrderByWithRelationInput;
exports.PermissionOrderByWithRelationInput = PermissionOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], PermissionOrderByWithRelationInput);
let PermissionOrderByRelationAggregateInput = class PermissionOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionOrderByRelationAggregateInput = PermissionOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PermissionOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.PermissionOrderByRelationAggregateInput = PermissionOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], PermissionOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map