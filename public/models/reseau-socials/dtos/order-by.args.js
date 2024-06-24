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
exports.ReseauSocialOrderByRelationAggregateInput = exports.ReseauSocialOrderByWithRelationInput = exports.ReseauSocialOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../contacts/dtos/order-by.args");
let ReseauSocialOrderByWithRelationInputStrict = class ReseauSocialOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialOrderByWithRelationInputStrict = ReseauSocialOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ContactOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.ContactOrderByWithRelationInput)
], ReseauSocialOrderByWithRelationInputStrict.prototype, "contact", void 0);
exports.ReseauSocialOrderByWithRelationInputStrict = ReseauSocialOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialOrderByWithRelationInputStrict);
let ReseauSocialOrderByWithRelationInput = class ReseauSocialOrderByWithRelationInput extends (0, graphql_1.PartialType)(ReseauSocialOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialOrderByWithRelationInput = ReseauSocialOrderByWithRelationInput;
exports.ReseauSocialOrderByWithRelationInput = ReseauSocialOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialOrderByWithRelationInput);
let ReseauSocialOrderByRelationAggregateInput = class ReseauSocialOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialOrderByRelationAggregateInput = ReseauSocialOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ReseauSocialOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ReseauSocialOrderByRelationAggregateInput = ReseauSocialOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map