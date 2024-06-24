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
exports.PaiementOrderByRelationAggregateInput = exports.PaiementOrderByWithRelationInput = exports.PaiementOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../etudiants/dtos/order-by.args");
let PaiementOrderByWithRelationInputStrict = class PaiementOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementOrderByWithRelationInputStrict = PaiementOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "montant", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "datePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "methodePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "referencePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "typeFrais", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByWithRelationInputStrict.prototype, "statutPaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.EtudiantOrderByWithRelationInput)
], PaiementOrderByWithRelationInputStrict.prototype, "etudiant", void 0);
exports.PaiementOrderByWithRelationInputStrict = PaiementOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], PaiementOrderByWithRelationInputStrict);
let PaiementOrderByWithRelationInput = class PaiementOrderByWithRelationInput extends (0, graphql_1.PartialType)(PaiementOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementOrderByWithRelationInput = PaiementOrderByWithRelationInput;
exports.PaiementOrderByWithRelationInput = PaiementOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], PaiementOrderByWithRelationInput);
let PaiementOrderByRelationAggregateInput = class PaiementOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementOrderByRelationAggregateInput = PaiementOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], PaiementOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.PaiementOrderByRelationAggregateInput = PaiementOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], PaiementOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map