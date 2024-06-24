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
exports.FindUniqueEtablissementArgs = exports.FindManyEtablissementArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.EtablissementScalarFieldEnum, {
    name: 'EtablissementScalarFieldEnum',
});
let FindManyEtablissementArgsStrict = class FindManyEtablissementArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementWhereInput)
], FindManyEtablissementArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.EtablissementOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyEtablissementArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementWhereUniqueInput)
], FindManyEtablissementArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyEtablissementArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyEtablissementArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.EtablissementScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyEtablissementArgsStrict.prototype, "distinct", void 0);
FindManyEtablissementArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyEtablissementArgsStrict);
let FindManyEtablissementArgs = class FindManyEtablissementArgs extends (0, graphql_1.PartialType)(FindManyEtablissementArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyEtablissementArgs = FindManyEtablissementArgs;
exports.FindManyEtablissementArgs = FindManyEtablissementArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyEtablissementArgs);
let FindUniqueEtablissementArgs = class FindUniqueEtablissementArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").EtablissementWhereUniqueInput } };
    }
};
exports.FindUniqueEtablissementArgs = FindUniqueEtablissementArgs;
exports.FindUniqueEtablissementArgs = FindUniqueEtablissementArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueEtablissementArgs);
//# sourceMappingURL=find.args.js.map