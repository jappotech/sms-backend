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
exports.SpecialiteRelationFilter = exports.SpecialiteListRelationFilter = exports.SpecialiteWhereInput = exports.SpecialiteWhereInputStrict = exports.SpecialiteWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../classes/dtos/where.args");
const where_args_2 = require("../../diplomes/dtos/where.args");
const where_args_3 = require("../../mentions/dtos/where.args");
let SpecialiteWhereUniqueInput = class SpecialiteWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteWhereUniqueInput = SpecialiteWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], SpecialiteWhereUniqueInput.prototype, "id", void 0);
exports.SpecialiteWhereUniqueInput = SpecialiteWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteWhereUniqueInput);
let SpecialiteWhereInputStrict = class SpecialiteWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteWhereInputStrict = SpecialiteWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SpecialiteWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SpecialiteWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SpecialiteWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SpecialiteWhereInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInputStrict.prototype, "mentionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.MentionRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.MentionRelationFilter)
], SpecialiteWhereInputStrict.prototype, "mention", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseListRelationFilter)
], SpecialiteWhereInputStrict.prototype, "Classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.DiplomeListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.DiplomeListRelationFilter)
], SpecialiteWhereInputStrict.prototype, "Diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInputStrict.prototype, "NOT", void 0);
exports.SpecialiteWhereInputStrict = SpecialiteWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteWhereInputStrict);
let SpecialiteWhereInput = class SpecialiteWhereInput extends (0, graphql_1.PartialType)(SpecialiteWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteWhereInput = SpecialiteWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SpecialiteWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], SpecialiteWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SpecialiteWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], SpecialiteWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInput.prototype, "mentionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.MentionRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.MentionRelationFilter)
], SpecialiteWhereInput.prototype, "mention", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseListRelationFilter)
], SpecialiteWhereInput.prototype, "Classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.DiplomeListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.DiplomeListRelationFilter)
], SpecialiteWhereInput.prototype, "Diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], SpecialiteWhereInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SpecialiteWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SpecialiteWhereInput.prototype, "NOT", void 0);
exports.SpecialiteWhereInput = SpecialiteWhereInput = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteWhereInput);
let SpecialiteListRelationFilter = class SpecialiteListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteListRelationFilter = SpecialiteListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SpecialiteWhereInput, { nullable: true }),
    __metadata("design:type", SpecialiteWhereInput)
], SpecialiteListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => SpecialiteWhereInput, { nullable: true }),
    __metadata("design:type", SpecialiteWhereInput)
], SpecialiteListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => SpecialiteWhereInput, { nullable: true }),
    __metadata("design:type", SpecialiteWhereInput)
], SpecialiteListRelationFilter.prototype, "none", void 0);
exports.SpecialiteListRelationFilter = SpecialiteListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteListRelationFilter);
let SpecialiteRelationFilter = class SpecialiteRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SpecialiteRelationFilter = SpecialiteRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => SpecialiteWhereInput, { nullable: true }),
    __metadata("design:type", SpecialiteWhereInput)
], SpecialiteRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => SpecialiteWhereInput, { nullable: true }),
    __metadata("design:type", SpecialiteWhereInput)
], SpecialiteRelationFilter.prototype, "isNot", void 0);
exports.SpecialiteRelationFilter = SpecialiteRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], SpecialiteRelationFilter);
//# sourceMappingURL=where.args.js.map