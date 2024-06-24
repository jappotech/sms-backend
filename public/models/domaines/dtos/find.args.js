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
exports.FindUniqueDomaineArgs = exports.FindManyDomaineArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.DomaineScalarFieldEnum, {
    name: 'DomaineScalarFieldEnum',
});
let FindManyDomaineArgsStrict = class FindManyDomaineArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.DomaineWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.DomaineWhereInput)
], FindManyDomaineArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.DomaineOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyDomaineArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.DomaineWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.DomaineWhereUniqueInput)
], FindManyDomaineArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyDomaineArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyDomaineArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.DomaineScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyDomaineArgsStrict.prototype, "distinct", void 0);
FindManyDomaineArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyDomaineArgsStrict);
let FindManyDomaineArgs = class FindManyDomaineArgs extends (0, graphql_1.PartialType)(FindManyDomaineArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyDomaineArgs = FindManyDomaineArgs;
exports.FindManyDomaineArgs = FindManyDomaineArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyDomaineArgs);
let FindUniqueDomaineArgs = class FindUniqueDomaineArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").DomaineWhereUniqueInput } };
    }
};
exports.FindUniqueDomaineArgs = FindUniqueDomaineArgs;
exports.FindUniqueDomaineArgs = FindUniqueDomaineArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueDomaineArgs);
//# sourceMappingURL=find.args.js.map