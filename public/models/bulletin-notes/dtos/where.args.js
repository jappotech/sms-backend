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
exports.BulletinNotesRelationFilter = exports.BulletinNotesListRelationFilter = exports.BulletinNotesWhereInput = exports.BulletinNotesWhereInputStrict = exports.BulletinNotesAnnuelWhereUniqueInput = exports.BulletinNotesWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
let BulletinNotesWhereUniqueInput = class BulletinNotesWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { etudiantId: { type: () => Number }, semestreId: { type: () => Number }, classeId: { type: () => Number } };
    }
};
exports.BulletinNotesWhereUniqueInput = BulletinNotesWhereUniqueInput;
exports.BulletinNotesWhereUniqueInput = BulletinNotesWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesWhereUniqueInput);
let BulletinNotesAnnuelWhereUniqueInput = class BulletinNotesAnnuelWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { etudiantId: { type: () => Number }, classeId: { type: () => Number } };
    }
};
exports.BulletinNotesAnnuelWhereUniqueInput = BulletinNotesAnnuelWhereUniqueInput;
exports.BulletinNotesAnnuelWhereUniqueInput = BulletinNotesAnnuelWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesAnnuelWhereUniqueInput);
let BulletinNotesWhereInputStrict = class BulletinNotesWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotesWhereInputStrict = BulletinNotesWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInputStrict.prototype, "NOT", void 0);
exports.BulletinNotesWhereInputStrict = BulletinNotesWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesWhereInputStrict);
let BulletinNotesWhereInput = class BulletinNotesWhereInput extends (0, graphql_1.PartialType)(BulletinNotesWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotesWhereInput = BulletinNotesWhereInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], BulletinNotesWhereInput.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BulletinNotesWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotesWhereInput.prototype, "NOT", void 0);
exports.BulletinNotesWhereInput = BulletinNotesWhereInput = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesWhereInput);
let BulletinNotesListRelationFilter = class BulletinNotesListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").BulletinNotesWhereInput }, some: { nullable: true, type: () => require("./where.args").BulletinNotesWhereInput }, none: { nullable: true, type: () => require("./where.args").BulletinNotesWhereInput } };
    }
};
exports.BulletinNotesListRelationFilter = BulletinNotesListRelationFilter;
exports.BulletinNotesListRelationFilter = BulletinNotesListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesListRelationFilter);
let BulletinNotesRelationFilter = class BulletinNotesRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").BulletinNotesWhereInput }, isNot: { nullable: true, type: () => require("./where.args").BulletinNotesWhereInput } };
    }
};
exports.BulletinNotesRelationFilter = BulletinNotesRelationFilter;
exports.BulletinNotesRelationFilter = BulletinNotesRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesRelationFilter);
//# sourceMappingURL=where.args.js.map