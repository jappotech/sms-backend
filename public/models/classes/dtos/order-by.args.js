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
exports.ClasseOrderByRelationAggregateInput = exports.ClasseOrderByWithRelationInput = exports.ClasseOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../annee-scolaires/dtos/order-by.args");
const order_by_args_2 = require("../../cours/dtos/order-by.args");
const order_by_args_3 = require("../../emploi-du-temps/dtos/order-by.args");
const order_by_args_4 = require("../../etablissements/dtos/order-by.args");
const order_by_args_5 = require("../../inscriptions/dtos/order-by.args");
const order_by_args_6 = require("../../semestres/dtos/order-by.args");
const order_by_args_7 = require("../../specialites/dtos/order-by.args");
let ClasseOrderByWithRelationInputStrict = class ClasseOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseOrderByWithRelationInputStrict = ClasseOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "anneeScolaireId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", order_by_args_1.AnneeScolaireOrderByWithRelationInput)
], ClasseOrderByWithRelationInputStrict.prototype, "AnneeScolaire", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByWithRelationInputStrict.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.EtablissementOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.EtablissementOrderByWithRelationInput)
], ClasseOrderByWithRelationInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_6.SemestreOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_6.SemestreOrderByRelationAggregateInput)
], ClasseOrderByWithRelationInputStrict.prototype, "semestres", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_5.InscriptionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_5.InscriptionOrderByRelationAggregateInput)
], ClasseOrderByWithRelationInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_7.SpecialiteOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_7.SpecialiteOrderByWithRelationInput)
], ClasseOrderByWithRelationInputStrict.prototype, "specialite", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.CoursOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.CoursOrderByRelationAggregateInput)
], ClasseOrderByWithRelationInputStrict.prototype, "Cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EmploiDuTempsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EmploiDuTempsOrderByRelationAggregateInput)
], ClasseOrderByWithRelationInputStrict.prototype, "EmploiDuTemps", void 0);
exports.ClasseOrderByWithRelationInputStrict = ClasseOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ClasseOrderByWithRelationInputStrict);
let ClasseOrderByWithRelationInput = class ClasseOrderByWithRelationInput extends (0, graphql_1.PartialType)(ClasseOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseOrderByWithRelationInput = ClasseOrderByWithRelationInput;
exports.ClasseOrderByWithRelationInput = ClasseOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ClasseOrderByWithRelationInput);
let ClasseOrderByRelationAggregateInput = class ClasseOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseOrderByRelationAggregateInput = ClasseOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ClasseOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ClasseOrderByRelationAggregateInput = ClasseOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ClasseOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map