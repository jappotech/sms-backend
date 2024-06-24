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
exports.EmploiDuTempsOrderByRelationAggregateInput = exports.EmploiDuTempsOrderByWithRelationInput = exports.EmploiDuTempsOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../cours/dtos/order-by.args");
const order_by_args_3 = require("../../professeurs/dtos/order-by.args");
const order_by_args_4 = require("../../salles/dtos/order-by.args");
let EmploiDuTempsOrderByWithRelationInputStrict = class EmploiDuTempsOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsOrderByWithRelationInputStrict = EmploiDuTempsOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.CoursOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.CoursOrderByWithRelationInput)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ClasseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.ClasseOrderByWithRelationInput)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.ProfesseurOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.ProfesseurOrderByWithRelationInput)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.SalleOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.SalleOrderByWithRelationInput)
], EmploiDuTempsOrderByWithRelationInputStrict.prototype, "salle", void 0);
exports.EmploiDuTempsOrderByWithRelationInputStrict = EmploiDuTempsOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsOrderByWithRelationInputStrict);
let EmploiDuTempsOrderByWithRelationInput = class EmploiDuTempsOrderByWithRelationInput extends (0, graphql_1.PartialType)(EmploiDuTempsOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsOrderByWithRelationInput = EmploiDuTempsOrderByWithRelationInput;
exports.EmploiDuTempsOrderByWithRelationInput = EmploiDuTempsOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsOrderByWithRelationInput);
let EmploiDuTempsOrderByRelationAggregateInput = class EmploiDuTempsOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsOrderByRelationAggregateInput = EmploiDuTempsOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EmploiDuTempsOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.EmploiDuTempsOrderByRelationAggregateInput = EmploiDuTempsOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map