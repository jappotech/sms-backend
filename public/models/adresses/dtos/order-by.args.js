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
exports.AdresseOrderByRelationAggregateInput = exports.AdresseOrderByWithRelationInput = exports.AdresseOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../etablissements/dtos/order-by.args");
const order_by_args_2 = require("../../utilisateurs/dtos/order-by.args");
let AdresseOrderByWithRelationInputStrict = class AdresseOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseOrderByWithRelationInputStrict = AdresseOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdresseOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdresseOrderByWithRelationInputStrict.prototype, "pays", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdresseOrderByWithRelationInputStrict.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdresseOrderByWithRelationInputStrict.prototype, "ville", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AdresseOrderByWithRelationInputStrict.prototype, "codePostal", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AdresseOrderByWithRelationInputStrict.prototype, "geolocalisation", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.UtilisateurOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.UtilisateurOrderByRelationAggregateInput)
], AdresseOrderByWithRelationInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.EtablissementOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.EtablissementOrderByRelationAggregateInput)
], AdresseOrderByWithRelationInputStrict.prototype, "etablissements", void 0);
exports.AdresseOrderByWithRelationInputStrict = AdresseOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], AdresseOrderByWithRelationInputStrict);
let AdresseOrderByWithRelationInput = class AdresseOrderByWithRelationInput extends (0, graphql_1.PartialType)(AdresseOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseOrderByWithRelationInput = AdresseOrderByWithRelationInput;
exports.AdresseOrderByWithRelationInput = AdresseOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], AdresseOrderByWithRelationInput);
let AdresseOrderByRelationAggregateInput = class AdresseOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseOrderByRelationAggregateInput = AdresseOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AdresseOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.AdresseOrderByRelationAggregateInput = AdresseOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], AdresseOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map