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
exports.NoteEtudiantRelationFilter = exports.NoteEtudiantListRelationFilter = exports.NoteEtudiantWhereInput = exports.NoteEtudiantWhereInputStrict = exports.NoteEtudiantWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../etudiants/dtos/where.args");
const where_args_2 = require("../../evaluation-etudiants/dtos/where.args");
let NoteEtudiantWhereUniqueInput = class NoteEtudiantWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantWhereUniqueInput = NoteEtudiantWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], NoteEtudiantWhereUniqueInput.prototype, "id", void 0);
exports.NoteEtudiantWhereUniqueInput = NoteEtudiantWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantWhereUniqueInput);
let NoteEtudiantWhereInputStrict = class NoteEtudiantWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantWhereInputStrict = NoteEtudiantWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], NoteEtudiantWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], NoteEtudiantWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", common_input_1.FloatFilter)
], NoteEtudiantWhereInputStrict.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInputStrict.prototype, "evaluationEtudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EvaluationEtudiantsRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EvaluationEtudiantsRelationFilter)
], NoteEtudiantWhereInputStrict.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtudiantRelationFilter)
], NoteEtudiantWhereInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInputStrict.prototype, "NOT", void 0);
exports.NoteEtudiantWhereInputStrict = NoteEtudiantWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantWhereInputStrict);
let NoteEtudiantWhereInput = class NoteEtudiantWhereInput extends (0, graphql_1.PartialType)(NoteEtudiantWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantWhereInput = NoteEtudiantWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], NoteEtudiantWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], NoteEtudiantWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", common_input_1.FloatFilter)
], NoteEtudiantWhereInput.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInput.prototype, "evaluationEtudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], NoteEtudiantWhereInput.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EvaluationEtudiantsRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EvaluationEtudiantsRelationFilter)
], NoteEtudiantWhereInput.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtudiantRelationFilter)
], NoteEtudiantWhereInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NoteEtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], NoteEtudiantWhereInput.prototype, "NOT", void 0);
exports.NoteEtudiantWhereInput = NoteEtudiantWhereInput = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantWhereInput);
let NoteEtudiantListRelationFilter = class NoteEtudiantListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantListRelationFilter = NoteEtudiantListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => NoteEtudiantWhereInput, { nullable: true }),
    __metadata("design:type", NoteEtudiantWhereInput)
], NoteEtudiantListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => NoteEtudiantWhereInput, { nullable: true }),
    __metadata("design:type", NoteEtudiantWhereInput)
], NoteEtudiantListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => NoteEtudiantWhereInput, { nullable: true }),
    __metadata("design:type", NoteEtudiantWhereInput)
], NoteEtudiantListRelationFilter.prototype, "none", void 0);
exports.NoteEtudiantListRelationFilter = NoteEtudiantListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantListRelationFilter);
let NoteEtudiantRelationFilter = class NoteEtudiantRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.NoteEtudiantRelationFilter = NoteEtudiantRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => NoteEtudiantWhereInput, { nullable: true }),
    __metadata("design:type", NoteEtudiantWhereInput)
], NoteEtudiantRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => NoteEtudiantWhereInput, { nullable: true }),
    __metadata("design:type", NoteEtudiantWhereInput)
], NoteEtudiantRelationFilter.prototype, "isNot", void 0);
exports.NoteEtudiantRelationFilter = NoteEtudiantRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], NoteEtudiantRelationFilter);
//# sourceMappingURL=where.args.js.map