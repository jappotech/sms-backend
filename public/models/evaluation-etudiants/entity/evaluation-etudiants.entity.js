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
exports.EvaluationEtudiants = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let EvaluationEtudiants = class EvaluationEtudiants {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiants = EvaluationEtudiants;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EvaluationEtudiants.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], EvaluationEtudiants.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], EvaluationEtudiants.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], EvaluationEtudiants.prototype, "dateEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, {}),
    __metadata("design:type", String)
], EvaluationEtudiants.prototype, "typeEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EvaluationEtudiants.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiants.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiants.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EvaluationEtudiants.prototype, "coursId", void 0);
exports.EvaluationEtudiants = EvaluationEtudiants = __decorate([
    (0, graphql_1.ObjectType)()
], EvaluationEtudiants);
//# sourceMappingURL=evaluation-etudiants.entity.js.map