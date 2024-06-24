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
exports.PermissionRelationFilter = exports.PermissionListRelationFilter = exports.PermissionWhereInput = exports.PermissionWhereInputStrict = exports.PermissionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../utilisateurs/dtos/where.args");
let PermissionWhereUniqueInput = class PermissionWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionWhereUniqueInput = PermissionWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PermissionWhereUniqueInput.prototype, "id", void 0);
exports.PermissionWhereUniqueInput = PermissionWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], PermissionWhereUniqueInput);
let PermissionWhereInputStrict = class PermissionWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionWhereInputStrict = PermissionWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PermissionWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PermissionWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PermissionWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], PermissionWhereInputStrict.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PermissionWhereInputStrict.prototype, "label", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PermissionWhereInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.UtilisateurListRelationFilter)
], PermissionWhereInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInputStrict.prototype, "NOT", void 0);
exports.PermissionWhereInputStrict = PermissionWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], PermissionWhereInputStrict);
let PermissionWhereInput = class PermissionWhereInput extends (0, graphql_1.PartialType)(PermissionWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionWhereInput = PermissionWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PermissionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PermissionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PermissionWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], PermissionWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PermissionWhereInput.prototype, "label", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PermissionWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.UtilisateurListRelationFilter)
], PermissionWhereInput.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PermissionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "NOT", void 0);
exports.PermissionWhereInput = PermissionWhereInput = __decorate([
    (0, graphql_1.InputType)()
], PermissionWhereInput);
let PermissionListRelationFilter = class PermissionListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionListRelationFilter = PermissionListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => PermissionWhereInput, { nullable: true }),
    __metadata("design:type", PermissionWhereInput)
], PermissionListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => PermissionWhereInput, { nullable: true }),
    __metadata("design:type", PermissionWhereInput)
], PermissionListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => PermissionWhereInput, { nullable: true }),
    __metadata("design:type", PermissionWhereInput)
], PermissionListRelationFilter.prototype, "none", void 0);
exports.PermissionListRelationFilter = PermissionListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], PermissionListRelationFilter);
let PermissionRelationFilter = class PermissionRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PermissionRelationFilter = PermissionRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => PermissionWhereInput, { nullable: true }),
    __metadata("design:type", PermissionWhereInput)
], PermissionRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => PermissionWhereInput, { nullable: true }),
    __metadata("design:type", PermissionWhereInput)
], PermissionRelationFilter.prototype, "isNot", void 0);
exports.PermissionRelationFilter = PermissionRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], PermissionRelationFilter);
//# sourceMappingURL=where.args.js.map