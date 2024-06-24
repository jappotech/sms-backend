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
exports.DomaineRelationFilter = exports.DomaineListRelationFilter = exports.DomaineWhereInput = exports.DomaineWhereInputStrict = exports.DomaineWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../etablissements/dtos/where.args");
const where_args_2 = require("../../mentions/dtos/where.args");
let DomaineWhereUniqueInput = class DomaineWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineWhereUniqueInput = DomaineWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], DomaineWhereUniqueInput.prototype, "id", void 0);
exports.DomaineWhereUniqueInput = DomaineWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], DomaineWhereUniqueInput);
let DomaineWhereInputStrict = class DomaineWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineWhereInputStrict = DomaineWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DomaineWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DomaineWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DomaineWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DomaineWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DomaineWhereInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], DomaineWhereInputStrict.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.MentionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.MentionListRelationFilter)
], DomaineWhereInputStrict.prototype, "mentions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInputStrict.prototype, "NOT", void 0);
exports.DomaineWhereInputStrict = DomaineWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], DomaineWhereInputStrict);
let DomaineWhereInput = class DomaineWhereInput extends (0, graphql_1.PartialType)(DomaineWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineWhereInput = DomaineWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DomaineWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DomaineWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DomaineWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DomaineWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DomaineWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], DomaineWhereInput.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.MentionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.MentionListRelationFilter)
], DomaineWhereInput.prototype, "mentions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DomaineWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DomaineWhereInput.prototype, "NOT", void 0);
exports.DomaineWhereInput = DomaineWhereInput = __decorate([
    (0, graphql_1.InputType)()
], DomaineWhereInput);
let DomaineListRelationFilter = class DomaineListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineListRelationFilter = DomaineListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => DomaineWhereInput, { nullable: true }),
    __metadata("design:type", DomaineWhereInput)
], DomaineListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => DomaineWhereInput, { nullable: true }),
    __metadata("design:type", DomaineWhereInput)
], DomaineListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => DomaineWhereInput, { nullable: true }),
    __metadata("design:type", DomaineWhereInput)
], DomaineListRelationFilter.prototype, "none", void 0);
exports.DomaineListRelationFilter = DomaineListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], DomaineListRelationFilter);
let DomaineRelationFilter = class DomaineRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DomaineRelationFilter = DomaineRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => DomaineWhereInput, { nullable: true }),
    __metadata("design:type", DomaineWhereInput)
], DomaineRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => DomaineWhereInput, { nullable: true }),
    __metadata("design:type", DomaineWhereInput)
], DomaineRelationFilter.prototype, "isNot", void 0);
exports.DomaineRelationFilter = DomaineRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], DomaineRelationFilter);
//# sourceMappingURL=where.args.js.map