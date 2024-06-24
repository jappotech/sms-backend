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
exports.ReseauSocialRelationFilter = exports.ReseauSocialListRelationFilter = exports.ReseauSocialWhereInput = exports.ReseauSocialWhereInputStrict = exports.ReseauSocialWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../contacts/dtos/where.args");
let ReseauSocialWhereUniqueInput = class ReseauSocialWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialWhereUniqueInput = ReseauSocialWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ReseauSocialWhereUniqueInput.prototype, "id", void 0);
exports.ReseauSocialWhereUniqueInput = ReseauSocialWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialWhereUniqueInput);
let ReseauSocialWhereInputStrict = class ReseauSocialWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialWhereInputStrict = ReseauSocialWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ReseauSocialWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ReseauSocialWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ReseauSocialWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInputStrict.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInputStrict.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ReseauSocialWhereInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ContactRelationFilter)
], ReseauSocialWhereInputStrict.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInputStrict.prototype, "NOT", void 0);
exports.ReseauSocialWhereInputStrict = ReseauSocialWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialWhereInputStrict);
let ReseauSocialWhereInput = class ReseauSocialWhereInput extends (0, graphql_1.PartialType)(ReseauSocialWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialWhereInput = ReseauSocialWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ReseauSocialWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ReseauSocialWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ReseauSocialWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ReseauSocialWhereInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ReseauSocialWhereInput.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ContactRelationFilter)
], ReseauSocialWhereInput.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReseauSocialWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ReseauSocialWhereInput.prototype, "NOT", void 0);
exports.ReseauSocialWhereInput = ReseauSocialWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialWhereInput);
let ReseauSocialListRelationFilter = class ReseauSocialListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialListRelationFilter = ReseauSocialListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ReseauSocialWhereInput, { nullable: true }),
    __metadata("design:type", ReseauSocialWhereInput)
], ReseauSocialListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ReseauSocialWhereInput, { nullable: true }),
    __metadata("design:type", ReseauSocialWhereInput)
], ReseauSocialListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ReseauSocialWhereInput, { nullable: true }),
    __metadata("design:type", ReseauSocialWhereInput)
], ReseauSocialListRelationFilter.prototype, "none", void 0);
exports.ReseauSocialListRelationFilter = ReseauSocialListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialListRelationFilter);
let ReseauSocialRelationFilter = class ReseauSocialRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ReseauSocialRelationFilter = ReseauSocialRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ReseauSocialWhereInput, { nullable: true }),
    __metadata("design:type", ReseauSocialWhereInput)
], ReseauSocialRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ReseauSocialWhereInput, { nullable: true }),
    __metadata("design:type", ReseauSocialWhereInput)
], ReseauSocialRelationFilter.prototype, "isNot", void 0);
exports.ReseauSocialRelationFilter = ReseauSocialRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ReseauSocialRelationFilter);
//# sourceMappingURL=where.args.js.map