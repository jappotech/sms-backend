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
exports.FindUniqueUtilisateurArgs = exports.FindManyUtilisateurArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.UtilisateurScalarFieldEnum, {
    name: 'UtilisateurScalarFieldEnum',
});
let FindManyUtilisateurArgsStrict = class FindManyUtilisateurArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UtilisateurWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.UtilisateurWhereInput)
], FindManyUtilisateurArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.UtilisateurOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUtilisateurArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.UtilisateurWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.UtilisateurWhereUniqueInput)
], FindManyUtilisateurArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUtilisateurArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUtilisateurArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.UtilisateurScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyUtilisateurArgsStrict.prototype, "distinct", void 0);
FindManyUtilisateurArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyUtilisateurArgsStrict);
let FindManyUtilisateurArgs = class FindManyUtilisateurArgs extends (0, graphql_1.PartialType)(FindManyUtilisateurArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyUtilisateurArgs = FindManyUtilisateurArgs;
exports.FindManyUtilisateurArgs = FindManyUtilisateurArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyUtilisateurArgs);
let FindUniqueUtilisateurArgs = class FindUniqueUtilisateurArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").UtilisateurWhereUniqueInput } };
    }
};
exports.FindUniqueUtilisateurArgs = FindUniqueUtilisateurArgs;
exports.FindUniqueUtilisateurArgs = FindUniqueUtilisateurArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueUtilisateurArgs);
//# sourceMappingURL=find.args.js.map