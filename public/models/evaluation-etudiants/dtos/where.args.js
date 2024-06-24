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
exports.EvaluationEtudiantsRelationFilter = exports.EvaluationEtudiantsListRelationFilter = exports.EvaluationEtudiantsWhereInput = exports.EvaluationEtudiantsWhereInputStrict = exports.EvaluationEtudiantsWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../cours/dtos/where.args");
const where_args_2 = require("../../note-etudiants/dtos/where.args");
let EvaluationEtudiantsWhereUniqueInput = class EvaluationEtudiantsWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsWhereUniqueInput = EvaluationEtudiantsWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EvaluationEtudiantsWhereUniqueInput.prototype, "id", void 0);
exports.EvaluationEtudiantsWhereUniqueInput = EvaluationEtudiantsWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsWhereUniqueInput);
let EvaluationEtudiantsWhereInputStrict = class EvaluationEtudiantsWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsWhereInputStrict = EvaluationEtudiantsWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "dateEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsWhereInputStrict.prototype, "typeEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursRelationFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.NoteEtudiantListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.NoteEtudiantListRelationFilter)
], EvaluationEtudiantsWhereInputStrict.prototype, "NoteEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInputStrict.prototype, "NOT", void 0);
exports.EvaluationEtudiantsWhereInputStrict = EvaluationEtudiantsWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsWhereInputStrict);
let EvaluationEtudiantsWhereInput = class EvaluationEtudiantsWhereInput extends (0, graphql_1.PartialType)(EvaluationEtudiantsWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsWhereInput = EvaluationEtudiantsWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EvaluationEtudiantsWhereInput.prototype, "dateEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], EvaluationEtudiantsWhereInput.prototype, "typeEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInput.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EvaluationEtudiantsWhereInput.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EvaluationEtudiantsWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EvaluationEtudiantsWhereInput.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursRelationFilter)
], EvaluationEtudiantsWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.NoteEtudiantListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.NoteEtudiantListRelationFilter)
], EvaluationEtudiantsWhereInput.prototype, "NoteEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EvaluationEtudiantsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EvaluationEtudiantsWhereInput.prototype, "NOT", void 0);
exports.EvaluationEtudiantsWhereInput = EvaluationEtudiantsWhereInput = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsWhereInput);
let EvaluationEtudiantsListRelationFilter = class EvaluationEtudiantsListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsListRelationFilter = EvaluationEtudiantsListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EvaluationEtudiantsWhereInput, { nullable: true }),
    __metadata("design:type", EvaluationEtudiantsWhereInput)
], EvaluationEtudiantsListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => EvaluationEtudiantsWhereInput, { nullable: true }),
    __metadata("design:type", EvaluationEtudiantsWhereInput)
], EvaluationEtudiantsListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => EvaluationEtudiantsWhereInput, { nullable: true }),
    __metadata("design:type", EvaluationEtudiantsWhereInput)
], EvaluationEtudiantsListRelationFilter.prototype, "none", void 0);
exports.EvaluationEtudiantsListRelationFilter = EvaluationEtudiantsListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsListRelationFilter);
let EvaluationEtudiantsRelationFilter = class EvaluationEtudiantsRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EvaluationEtudiantsRelationFilter = EvaluationEtudiantsRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EvaluationEtudiantsWhereInput, { nullable: true }),
    __metadata("design:type", EvaluationEtudiantsWhereInput)
], EvaluationEtudiantsRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => EvaluationEtudiantsWhereInput, { nullable: true }),
    __metadata("design:type", EvaluationEtudiantsWhereInput)
], EvaluationEtudiantsRelationFilter.prototype, "isNot", void 0);
exports.EvaluationEtudiantsRelationFilter = EvaluationEtudiantsRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EvaluationEtudiantsRelationFilter);
//# sourceMappingURL=where.args.js.map