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
exports.AccountRelationFilter = exports.AccountListRelationFilter = exports.AccountWhereInput = exports.AccountWhereInputStrict = exports.AccountWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const common_input_1 = require("../../../common/dtos/common.input");
let AccountWhereUniqueInput = class AccountWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AccountWhereUniqueInput = AccountWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], AccountWhereUniqueInput.prototype, "id", void 0);
exports.AccountWhereUniqueInput = AccountWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], AccountWhereUniqueInput);
let AccountWhereInputStrict = class AccountWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AccountWhereInputStrict = AccountWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", Number)
], AccountWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInputStrict.prototype, "uid", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", Date)
], AccountWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInputStrict.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInputStrict.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], AccountWhereInputStrict.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", Boolean)
], AccountWhereInputStrict.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", Number)
], AccountWhereInputStrict.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInputStrict.prototype, "NOT", void 0);
exports.AccountWhereInputStrict = AccountWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], AccountWhereInputStrict);
let AccountWhereInput = class AccountWhereInput extends (0, graphql_1.PartialType)(AccountWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AccountWhereInput = AccountWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", Number)
], AccountWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInput.prototype, "uid", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", Date)
], AccountWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", String)
], AccountWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], AccountWhereInput.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", Boolean)
], AccountWhereInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", Number)
], AccountWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AccountWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AccountWhereInput.prototype, "NOT", void 0);
exports.AccountWhereInput = AccountWhereInput = __decorate([
    (0, graphql_1.InputType)()
], AccountWhereInput);
let AccountListRelationFilter = class AccountListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").AccountWhereInput }, some: { nullable: true, type: () => require("./where.args").AccountWhereInput }, none: { nullable: true, type: () => require("./where.args").AccountWhereInput } };
    }
};
exports.AccountListRelationFilter = AccountListRelationFilter;
exports.AccountListRelationFilter = AccountListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AccountListRelationFilter);
let AccountRelationFilter = class AccountRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").AccountWhereInput }, isNot: { nullable: true, type: () => require("./where.args").AccountWhereInput } };
    }
};
exports.AccountRelationFilter = AccountRelationFilter;
exports.AccountRelationFilter = AccountRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AccountRelationFilter);
//# sourceMappingURL=where.args.js.map