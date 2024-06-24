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
exports.SalleRelationFilter = exports.SalleListRelationFilter = exports.SalleWhereInput = exports.SalleWhereInputStrict = exports.SalleWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../cours/dtos/where.args");
const where_args_2 = require("../../emploi-du-temps/dtos/where.args");
const where_args_3 = require("../../etablissements/dtos/where.args");
let SalleWhereUniqueInput = class SalleWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleWhereUniqueInput = SalleWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], SalleWhereUniqueInput.prototype, "id", void 0);
exports.SalleWhereUniqueInput = SalleWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], SalleWhereUniqueInput);
let SalleWhereInputStrict = class SalleWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleWhereInputStrict = SalleWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SalleWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SalleWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SalleWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInputStrict.prototype, "capacite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SalleWhereInputStrict.prototype, "batiment", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", common_input_1.BoolFilter)
], SalleWhereInputStrict.prototype, "estDisponible", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtablissementRelationFilter)
], SalleWhereInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], SalleWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EmploiDuTempsListRelationFilter)
], SalleWhereInputStrict.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInputStrict.prototype, "NOT", void 0);
exports.SalleWhereInputStrict = SalleWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SalleWhereInputStrict);
let SalleWhereInput = class SalleWhereInput extends (0, graphql_1.PartialType)(SalleWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleWhereInput = SalleWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SalleWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SalleWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SalleWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInput.prototype, "capacite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SalleWhereInput.prototype, "batiment", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SalleWhereInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", common_input_1.BoolFilter)
], SalleWhereInput.prototype, "estDisponible", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtablissementRelationFilter)
], SalleWhereInput.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], SalleWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EmploiDuTempsListRelationFilter)
], SalleWhereInput.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SalleWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SalleWhereInput.prototype, "NOT", void 0);
exports.SalleWhereInput = SalleWhereInput = __decorate([
    (0, graphql_1.InputType)()
], SalleWhereInput);
let SalleListRelationFilter = class SalleListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleListRelationFilter = SalleListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SalleWhereInput, { nullable: true }),
    __metadata("design:type", SalleWhereInput)
], SalleListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => SalleWhereInput, { nullable: true }),
    __metadata("design:type", SalleWhereInput)
], SalleListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => SalleWhereInput, { nullable: true }),
    __metadata("design:type", SalleWhereInput)
], SalleListRelationFilter.prototype, "none", void 0);
exports.SalleListRelationFilter = SalleListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SalleListRelationFilter);
let SalleRelationFilter = class SalleRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SalleRelationFilter = SalleRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SalleWhereInput, { nullable: true }),
    __metadata("design:type", SalleWhereInput)
], SalleRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => SalleWhereInput, { nullable: true }),
    __metadata("design:type", SalleWhereInput)
], SalleRelationFilter.prototype, "isNot", void 0);
exports.SalleRelationFilter = SalleRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SalleRelationFilter);
//# sourceMappingURL=where.args.js.map