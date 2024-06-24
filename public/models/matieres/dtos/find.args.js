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
exports.FindUniqueMatiereArgs = exports.FindManyMatiereArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
(0, graphql_1.registerEnumType)(client_1.Prisma.MatiereScalarFieldEnum, {
    name: 'MatiereScalarFieldEnum',
});
let FindManyMatiereArgsStrict = class FindManyMatiereArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.MatiereWhereInput, { nullable: true }),
    __metadata("design:type", where_args_1.MatiereWhereInput)
], FindManyMatiereArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.MatiereOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyMatiereArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.MatiereWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.MatiereWhereUniqueInput)
], FindManyMatiereArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyMatiereArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyMatiereArgsStrict.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.MatiereScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyMatiereArgsStrict.prototype, "distinct", void 0);
FindManyMatiereArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyMatiereArgsStrict);
let FindManyMatiereArgs = class FindManyMatiereArgs extends (0, graphql_1.PartialType)(FindManyMatiereArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyMatiereArgs = FindManyMatiereArgs;
exports.FindManyMatiereArgs = FindManyMatiereArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyMatiereArgs);
let FindUniqueMatiereArgs = class FindUniqueMatiereArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").MatiereWhereUniqueInput } };
    }
};
exports.FindUniqueMatiereArgs = FindUniqueMatiereArgs;
exports.FindUniqueMatiereArgs = FindUniqueMatiereArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueMatiereArgs);
//# sourceMappingURL=find.args.js.map