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
exports.EmploiDuTempsRelationFilter = exports.EmploiDuTempsListRelationFilter = exports.EmploiDuTempsWhereInput = exports.EmploiDuTempsWhereInputStrict = exports.EmploiDuTempsWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../classes/dtos/where.args");
const where_args_2 = require("../../cours/dtos/where.args");
const where_args_3 = require("../../professeurs/dtos/where.args");
const where_args_4 = require("../../salles/dtos/where.args");
let EmploiDuTempsWhereUniqueInput = class EmploiDuTempsWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsWhereUniqueInput = EmploiDuTempsWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTempsWhereUniqueInput.prototype, "id", void 0);
exports.EmploiDuTempsWhereUniqueInput = EmploiDuTempsWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsWhereUniqueInput);
let EmploiDuTempsWhereInputStrict = class EmploiDuTempsWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsWhereInputStrict = EmploiDuTempsWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInputStrict.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInputStrict.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EmploiDuTempsWhereInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EmploiDuTempsWhereInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.CoursRelationFilter)
], EmploiDuTempsWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], EmploiDuTempsWhereInputStrict.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.ProfesseurRelationFilter)
], EmploiDuTempsWhereInputStrict.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.SalleRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.SalleRelationFilter)
], EmploiDuTempsWhereInputStrict.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInputStrict.prototype, "NOT", void 0);
exports.EmploiDuTempsWhereInputStrict = EmploiDuTempsWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsWhereInputStrict);
let EmploiDuTempsWhereInput = class EmploiDuTempsWhereInput extends (0, graphql_1.PartialType)(EmploiDuTempsWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsWhereInput = EmploiDuTempsWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInput.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInput.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInput.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EmploiDuTempsWhereInput.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EmploiDuTempsWhereInput.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EmploiDuTempsWhereInput.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.CoursRelationFilter)
], EmploiDuTempsWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], EmploiDuTempsWhereInput.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.ProfesseurRelationFilter)
], EmploiDuTempsWhereInput.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.SalleRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.SalleRelationFilter)
], EmploiDuTempsWhereInput.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmploiDuTempsWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EmploiDuTempsWhereInput.prototype, "NOT", void 0);
exports.EmploiDuTempsWhereInput = EmploiDuTempsWhereInput = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsWhereInput);
let EmploiDuTempsListRelationFilter = class EmploiDuTempsListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsListRelationFilter = EmploiDuTempsListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EmploiDuTempsWhereInput, { nullable: true }),
    __metadata("design:type", EmploiDuTempsWhereInput)
], EmploiDuTempsListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmploiDuTempsWhereInput, { nullable: true }),
    __metadata("design:type", EmploiDuTempsWhereInput)
], EmploiDuTempsListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmploiDuTempsWhereInput, { nullable: true }),
    __metadata("design:type", EmploiDuTempsWhereInput)
], EmploiDuTempsListRelationFilter.prototype, "none", void 0);
exports.EmploiDuTempsListRelationFilter = EmploiDuTempsListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsListRelationFilter);
let EmploiDuTempsRelationFilter = class EmploiDuTempsRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTempsRelationFilter = EmploiDuTempsRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EmploiDuTempsWhereInput, { nullable: true }),
    __metadata("design:type", EmploiDuTempsWhereInput)
], EmploiDuTempsRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmploiDuTempsWhereInput, { nullable: true }),
    __metadata("design:type", EmploiDuTempsWhereInput)
], EmploiDuTempsRelationFilter.prototype, "isNot", void 0);
exports.EmploiDuTempsRelationFilter = EmploiDuTempsRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EmploiDuTempsRelationFilter);
//# sourceMappingURL=where.args.js.map