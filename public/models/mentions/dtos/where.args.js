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
exports.MentionRelationFilter = exports.MentionListRelationFilter = exports.MentionWhereInput = exports.MentionWhereInputStrict = exports.MentionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../domaines/dtos/where.args");
const where_args_2 = require("../../specialites/dtos/where.args");
let MentionWhereUniqueInput = class MentionWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionWhereUniqueInput = MentionWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MentionWhereUniqueInput.prototype, "id", void 0);
exports.MentionWhereUniqueInput = MentionWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], MentionWhereUniqueInput);
let MentionWhereInputStrict = class MentionWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionWhereInputStrict = MentionWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MentionWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MentionWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MentionWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MentionWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MentionWhereInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MentionWhereInputStrict.prototype, "domaineId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.DomaineRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.DomaineRelationFilter)
], MentionWhereInputStrict.prototype, "domaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SpecialiteListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SpecialiteListRelationFilter)
], MentionWhereInputStrict.prototype, "specialites", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInputStrict.prototype, "NOT", void 0);
exports.MentionWhereInputStrict = MentionWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], MentionWhereInputStrict);
let MentionWhereInput = class MentionWhereInput extends (0, graphql_1.PartialType)(MentionWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionWhereInput = MentionWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MentionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MentionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], MentionWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MentionWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], MentionWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], MentionWhereInput.prototype, "domaineId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.DomaineRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.DomaineRelationFilter)
], MentionWhereInput.prototype, "domaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SpecialiteListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SpecialiteListRelationFilter)
], MentionWhereInput.prototype, "specialites", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MentionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MentionWhereInput.prototype, "NOT", void 0);
exports.MentionWhereInput = MentionWhereInput = __decorate([
    (0, graphql_1.InputType)()
], MentionWhereInput);
let MentionListRelationFilter = class MentionListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionListRelationFilter = MentionListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => MentionWhereInput, { nullable: true }),
    __metadata("design:type", MentionWhereInput)
], MentionListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => MentionWhereInput, { nullable: true }),
    __metadata("design:type", MentionWhereInput)
], MentionListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => MentionWhereInput, { nullable: true }),
    __metadata("design:type", MentionWhereInput)
], MentionListRelationFilter.prototype, "none", void 0);
exports.MentionListRelationFilter = MentionListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], MentionListRelationFilter);
let MentionRelationFilter = class MentionRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.MentionRelationFilter = MentionRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => MentionWhereInput, { nullable: true }),
    __metadata("design:type", MentionWhereInput)
], MentionRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => MentionWhereInput, { nullable: true }),
    __metadata("design:type", MentionWhereInput)
], MentionRelationFilter.prototype, "isNot", void 0);
exports.MentionRelationFilter = MentionRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], MentionRelationFilter);
//# sourceMappingURL=where.args.js.map