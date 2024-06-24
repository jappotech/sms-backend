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
exports.SemestreRelationFilter = exports.SemestreListRelationFilter = exports.SemestreWhereInput = exports.SemestreWhereInputStrict = exports.SemestreWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../classes/dtos/where.args");
const where_args_2 = require("../../unite-enseignements/dtos/where.args");
let SemestreWhereUniqueInput = class SemestreWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreWhereUniqueInput = SemestreWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], SemestreWhereUniqueInput.prototype, "id", void 0);
exports.SemestreWhereUniqueInput = SemestreWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], SemestreWhereUniqueInput);
let SemestreWhereInputStrict = class SemestreWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreWhereInputStrict = SemestreWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInputStrict.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], SemestreWhereInputStrict.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInputStrict.prototype, "nombreSemaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UniteEnseignementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UniteEnseignementListRelationFilter)
], SemestreWhereInputStrict.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], SemestreWhereInputStrict.prototype, "Classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInputStrict.prototype, "NOT", void 0);
exports.SemestreWhereInputStrict = SemestreWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SemestreWhereInputStrict);
let SemestreWhereInput = class SemestreWhereInput extends (0, graphql_1.PartialType)(SemestreWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreWhereInput = SemestreWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInput.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], SemestreWhereInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInput.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SemestreWhereInput.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInput.prototype, "nombreSemaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInput.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SemestreWhereInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UniteEnseignementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UniteEnseignementListRelationFilter)
], SemestreWhereInput.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], SemestreWhereInput.prototype, "Classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SemestreWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SemestreWhereInput.prototype, "NOT", void 0);
exports.SemestreWhereInput = SemestreWhereInput = __decorate([
    (0, graphql_1.InputType)()
], SemestreWhereInput);
let SemestreListRelationFilter = class SemestreListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreListRelationFilter = SemestreListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SemestreWhereInput, { nullable: true }),
    __metadata("design:type", SemestreWhereInput)
], SemestreListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => SemestreWhereInput, { nullable: true }),
    __metadata("design:type", SemestreWhereInput)
], SemestreListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => SemestreWhereInput, { nullable: true }),
    __metadata("design:type", SemestreWhereInput)
], SemestreListRelationFilter.prototype, "none", void 0);
exports.SemestreListRelationFilter = SemestreListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SemestreListRelationFilter);
let SemestreRelationFilter = class SemestreRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreRelationFilter = SemestreRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SemestreWhereInput, { nullable: true }),
    __metadata("design:type", SemestreWhereInput)
], SemestreRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => SemestreWhereInput, { nullable: true }),
    __metadata("design:type", SemestreWhereInput)
], SemestreRelationFilter.prototype, "isNot", void 0);
exports.SemestreRelationFilter = SemestreRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SemestreRelationFilter);
//# sourceMappingURL=where.args.js.map