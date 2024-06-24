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
exports.FindUniqueUniteEnseignementArgs = exports.FindManyUniteEnseignementArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.UniteEnseignementScalarFieldEnum, {
    name: 'UniteEnseignementScalarFieldEnum',
});
let FindManyUniteEnseignementArgsStrict = class FindManyUniteEnseignementArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UniteEnseignementWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.UniteEnseignementWhereInput)
], FindManyUniteEnseignementArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.UniteEnseignementOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUniteEnseignementArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UniteEnseignementWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.UniteEnseignementWhereUniqueInput)
], FindManyUniteEnseignementArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUniteEnseignementArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUniteEnseignementArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.UniteEnseignementScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyUniteEnseignementArgsStrict.prototype, "distinct", void 0);
FindManyUniteEnseignementArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyUniteEnseignementArgsStrict);
let FindManyUniteEnseignementArgs = class FindManyUniteEnseignementArgs extends (0, graphql_1.PartialType)(FindManyUniteEnseignementArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyUniteEnseignementArgs = FindManyUniteEnseignementArgs;
exports.FindManyUniteEnseignementArgs = FindManyUniteEnseignementArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyUniteEnseignementArgs);
let FindUniqueUniteEnseignementArgs = class FindUniqueUniteEnseignementArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").UniteEnseignementWhereUniqueInput } };
    }
};
exports.FindUniqueUniteEnseignementArgs = FindUniqueUniteEnseignementArgs;
exports.FindUniqueUniteEnseignementArgs = FindUniqueUniteEnseignementArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueUniteEnseignementArgs);
//# sourceMappingURL=find.args.js.map