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
exports.FindUniqueBulletinNotesAnnuelArgs = exports.FindUniqueBulletinNotesArgs = exports.FindManyBulletinNotesArgs = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const order_by_args_1 = require("./order-by.args");
const where_args_1 = require("./where.args");
let FindManyBulletinNotesArgsStrict = class FindManyBulletinNotesArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => where_args_1.BulletinNotesWhereInput, { nullable: false }),
    __metadata("design:type", where_args_1.BulletinNotesWhereInput)
], FindManyBulletinNotesArgsStrict.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_by_args_1.BulletinNotesOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyBulletinNotesArgsStrict.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.BulletinNotesWhereUniqueInput, { nullable: true }),
    __metadata("design:type", where_args_1.BulletinNotesWhereUniqueInput)
], FindManyBulletinNotesArgsStrict.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyBulletinNotesArgsStrict.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FindManyBulletinNotesArgsStrict.prototype, "skip", void 0);
FindManyBulletinNotesArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyBulletinNotesArgsStrict);
let FindManyBulletinNotesArgs = class FindManyBulletinNotesArgs extends (0, graphql_1.PartialType)(FindManyBulletinNotesArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyBulletinNotesArgs = FindManyBulletinNotesArgs;
exports.FindManyBulletinNotesArgs = FindManyBulletinNotesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyBulletinNotesArgs);
let FindUniqueBulletinNotesArgs = class FindUniqueBulletinNotesArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").BulletinNotesWhereUniqueInput } };
    }
};
exports.FindUniqueBulletinNotesArgs = FindUniqueBulletinNotesArgs;
exports.FindUniqueBulletinNotesArgs = FindUniqueBulletinNotesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueBulletinNotesArgs);
let FindUniqueBulletinNotesAnnuelArgs = class FindUniqueBulletinNotesAnnuelArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").BulletinNotesAnnuelWhereUniqueInput } };
    }
};
exports.FindUniqueBulletinNotesAnnuelArgs = FindUniqueBulletinNotesAnnuelArgs;
exports.FindUniqueBulletinNotesAnnuelArgs = FindUniqueBulletinNotesAnnuelArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueBulletinNotesAnnuelArgs);
//# sourceMappingURL=find.args.js.map