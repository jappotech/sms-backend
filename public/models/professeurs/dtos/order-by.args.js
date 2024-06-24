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
exports.ProfesseurOrderByRelationAggregateInput = exports.ProfesseurOrderByWithRelationInput = exports.ProfesseurOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../cours/dtos/order-by.args");
const order_by_args_2 = require("../../emploi-du-temps/dtos/order-by.args");
const order_by_args_3 = require("../../utilisateurs/dtos/order-by.args");
let ProfesseurOrderByWithRelationInputStrict = class ProfesseurOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurOrderByWithRelationInputStrict = ProfesseurOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProfesseurOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProfesseurOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProfesseurOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProfesseurOrderByWithRelationInputStrict.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.UtilisateurOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.UtilisateurOrderByWithRelationInput)
], ProfesseurOrderByWithRelationInputStrict.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.CoursOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.CoursOrderByRelationAggregateInput)
], ProfesseurOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput)
], ProfesseurOrderByWithRelationInputStrict.prototype, "EmploiDuTemps", void 0);
exports.ProfesseurOrderByWithRelationInputStrict = ProfesseurOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurOrderByWithRelationInputStrict);
let ProfesseurOrderByWithRelationInput = class ProfesseurOrderByWithRelationInput extends (0, graphql_1.PartialType)(ProfesseurOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurOrderByWithRelationInput = ProfesseurOrderByWithRelationInput;
exports.ProfesseurOrderByWithRelationInput = ProfesseurOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurOrderByWithRelationInput);
let ProfesseurOrderByRelationAggregateInput = class ProfesseurOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurOrderByRelationAggregateInput = ProfesseurOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProfesseurOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ProfesseurOrderByRelationAggregateInput = ProfesseurOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map