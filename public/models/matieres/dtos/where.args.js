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
exports.MatiereRelationFilter = exports.MatiereListRelationFilter = exports.MatiereWhereInput = exports.MatiereWhereInputStrict = exports.MatiereWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../cours/dtos/where.args");
const where_args_2 = require("../../unite-enseignements/dtos/where.args");
let MatiereWhereUniqueInput = class MatiereWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereWhereUniqueInput = MatiereWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MatiereWhereUniqueInput.prototype, "id", void 0);
exports.MatiereWhereUniqueInput = MatiereWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], MatiereWhereUniqueInput);
let MatiereWhereInputStrict = class MatiereWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereWhereInputStrict = MatiereWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MatiereWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MatiereWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MatiereWhereInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MatiereWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInputStrict.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInputStrict.prototype, "coefficient", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInputStrict.prototype, "nbHeure", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInputStrict.prototype, "uniteEnseignementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], MatiereWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UniteEnseignementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UniteEnseignementRelationFilter)
], MatiereWhereInputStrict.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInputStrict.prototype, "NOT", void 0);
exports.MatiereWhereInputStrict = MatiereWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], MatiereWhereInputStrict);
let MatiereWhereInput = class MatiereWhereInput extends (0, graphql_1.PartialType)(MatiereWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereWhereInput = MatiereWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MatiereWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MatiereWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MatiereWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MatiereWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInput.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInput.prototype, "coefficient", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInput.prototype, "nbHeure", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MatiereWhereInput.prototype, "uniteEnseignementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], MatiereWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UniteEnseignementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UniteEnseignementRelationFilter)
], MatiereWhereInput.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MatiereWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MatiereWhereInput.prototype, "NOT", void 0);
exports.MatiereWhereInput = MatiereWhereInput = __decorate([
    (0, graphql_1.InputType)()
], MatiereWhereInput);
let MatiereListRelationFilter = class MatiereListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereListRelationFilter = MatiereListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => MatiereWhereInput, { nullable: true }),
    __metadata("design:type", MatiereWhereInput)
], MatiereListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => MatiereWhereInput, { nullable: true }),
    __metadata("design:type", MatiereWhereInput)
], MatiereListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => MatiereWhereInput, { nullable: true }),
    __metadata("design:type", MatiereWhereInput)
], MatiereListRelationFilter.prototype, "none", void 0);
exports.MatiereListRelationFilter = MatiereListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], MatiereListRelationFilter);
let MatiereRelationFilter = class MatiereRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MatiereRelationFilter = MatiereRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => MatiereWhereInput, { nullable: true }),
    __metadata("design:type", MatiereWhereInput)
], MatiereRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => MatiereWhereInput, { nullable: true }),
    __metadata("design:type", MatiereWhereInput)
], MatiereRelationFilter.prototype, "isNot", void 0);
exports.MatiereRelationFilter = MatiereRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], MatiereRelationFilter);
//# sourceMappingURL=where.args.js.map