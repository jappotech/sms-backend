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
exports.FindUniqueClasseArgs = exports.FindManyClasseArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.ClasseScalarFieldEnum, {
    name: 'ClasseScalarFieldEnum',
});
let FindManyClasseArgsStrict = class FindManyClasseArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseWhereInput)
], FindManyClasseArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.ClasseOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyClasseArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseWhereUniqueInput)
], FindManyClasseArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyClasseArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyClasseArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.ClasseScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyClasseArgsStrict.prototype, "distinct", void 0);
FindManyClasseArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyClasseArgsStrict);
let FindManyClasseArgs = class FindManyClasseArgs extends (0, graphql_1.PartialType)(FindManyClasseArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyClasseArgs = FindManyClasseArgs;
exports.FindManyClasseArgs = FindManyClasseArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyClasseArgs);
let FindUniqueClasseArgs = class FindUniqueClasseArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").ClasseWhereUniqueInput } };
    }
};
exports.FindUniqueClasseArgs = FindUniqueClasseArgs;
exports.FindUniqueClasseArgs = FindUniqueClasseArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueClasseArgs);
//# sourceMappingURL=find.args.js.map