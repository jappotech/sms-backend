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
exports.NoteEtudiantOrderByRelationAggregateInput = exports.NoteEtudiantOrderByWithRelationInput = exports.NoteEtudiantOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../etudiants/dtos/order-by.args");
const order_by_args_2 = require("../../evaluation-etudiants/dtos/order-by.args");
let NoteEtudiantOrderByWithRelationInputStrict = class NoteEtudiantOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantOrderByWithRelationInputStrict = NoteEtudiantOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "evaluationEtudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.EvaluationEtudiantsOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.EvaluationEtudiantsOrderByWithRelationInput)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.EtudiantOrderByWithRelationInput)
], NoteEtudiantOrderByWithRelationInputStrict.prototype, "etudiant", void 0);
exports.NoteEtudiantOrderByWithRelationInputStrict = NoteEtudiantOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantOrderByWithRelationInputStrict);
let NoteEtudiantOrderByWithRelationInput = class NoteEtudiantOrderByWithRelationInput extends (0, graphql_1.PartialType)(NoteEtudiantOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantOrderByWithRelationInput = NoteEtudiantOrderByWithRelationInput;
exports.NoteEtudiantOrderByWithRelationInput = NoteEtudiantOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantOrderByWithRelationInput);
let NoteEtudiantOrderByRelationAggregateInput = class NoteEtudiantOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantOrderByRelationAggregateInput = NoteEtudiantOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], NoteEtudiantOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.NoteEtudiantOrderByRelationAggregateInput = NoteEtudiantOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map