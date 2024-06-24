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
exports.EvaluationEtudiantsOrderByRelationAggregateInput = exports.EvaluationEtudiantsOrderByWithRelationInput = exports.EvaluationEtudiantsOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../cours/dtos/order-by.args");
const order_by_args_2 = require("../../note-etudiants/dtos/order-by.args");
let EvaluationEtudiantsOrderByWithRelationInputStrict = class EvaluationEtudiantsOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsOrderByWithRelationInputStrict = EvaluationEtudiantsOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "dateEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "typeEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.CoursOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.CoursOrderByWithRelationInput)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.NoteEtudiantOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.NoteEtudiantOrderByRelationAggregateInput)
], EvaluationEtudiantsOrderByWithRelationInputStrict.prototype, "NoteEtudiant", void 0);
exports.EvaluationEtudiantsOrderByWithRelationInputStrict = EvaluationEtudiantsOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsOrderByWithRelationInputStrict);
let EvaluationEtudiantsOrderByWithRelationInput = class EvaluationEtudiantsOrderByWithRelationInput extends (0, graphql_1.PartialType)(EvaluationEtudiantsOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsOrderByWithRelationInput = EvaluationEtudiantsOrderByWithRelationInput;
exports.EvaluationEtudiantsOrderByWithRelationInput = EvaluationEtudiantsOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsOrderByWithRelationInput);
let EvaluationEtudiantsOrderByRelationAggregateInput = class EvaluationEtudiantsOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsOrderByRelationAggregateInput = EvaluationEtudiantsOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.EvaluationEtudiantsOrderByRelationAggregateInput = EvaluationEtudiantsOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map