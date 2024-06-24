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
exports.PaginationInput = exports.LocationFilterInput = exports.AggregateCountOutput = exports.SortOrder = exports.WhereUniqueInputUid = exports.WhereUniqueInputString = exports.WhereUniqueInputNumber = exports.FloatFilter = exports.IntFilter = exports.BoolFilter = exports.StringListFilter = exports.StringFilter = exports.DateTimeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let DateTimeFilter = class DateTimeFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DateTimeFilter = DateTimeFilter;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "gte", void 0);
exports.DateTimeFilter = DateTimeFilter = __decorate([
    (0, graphql_1.InputType)()
], DateTimeFilter);
(0, graphql_1.registerEnumType)(client_1.Prisma.QueryMode, {
    name: 'QueryMode',
});
let StringFilter = class StringFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.StringFilter = StringFilter;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.QueryMode, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "mode", void 0);
exports.StringFilter = StringFilter = __decorate([
    (0, graphql_1.InputType)()
], StringFilter);
let StringListFilter = class StringListFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.StringListFilter = StringListFilter;
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringListFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringListFilter.prototype, "has", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringListFilter.prototype, "hasEvery", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringListFilter.prototype, "hasSome", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], StringListFilter.prototype, "isEmpty", void 0);
exports.StringListFilter = StringListFilter = __decorate([
    (0, graphql_1.InputType)()
], StringListFilter);
let BoolFilter = class BoolFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BoolFilter = BoolFilter;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], BoolFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], BoolFilter.prototype, "not", void 0);
exports.BoolFilter = BoolFilter = __decorate([
    (0, graphql_1.InputType)()
], BoolFilter);
let IntFilter = class IntFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.IntFilter = IntFilter;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], IntFilter.prototype, "gte", void 0);
exports.IntFilter = IntFilter = __decorate([
    (0, graphql_1.InputType)()
], IntFilter);
let FloatFilter = class FloatFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FloatFilter = FloatFilter;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatFilter.prototype, "not", void 0);
exports.FloatFilter = FloatFilter = __decorate([
    (0, graphql_1.InputType)()
], FloatFilter);
let WhereUniqueInputNumber = class WhereUniqueInputNumber {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.WhereUniqueInputNumber = WhereUniqueInputNumber;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], WhereUniqueInputNumber.prototype, "id", void 0);
exports.WhereUniqueInputNumber = WhereUniqueInputNumber = __decorate([
    (0, graphql_1.InputType)()
], WhereUniqueInputNumber);
let WhereUniqueInputString = class WhereUniqueInputString {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.WhereUniqueInputString = WhereUniqueInputString;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], WhereUniqueInputString.prototype, "id", void 0);
exports.WhereUniqueInputString = WhereUniqueInputString = __decorate([
    (0, graphql_1.InputType)()
], WhereUniqueInputString);
let WhereUniqueInputUid = class WhereUniqueInputUid {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.WhereUniqueInputUid = WhereUniqueInputUid;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], WhereUniqueInputUid.prototype, "uid", void 0);
exports.WhereUniqueInputUid = WhereUniqueInputUid = __decorate([
    (0, graphql_1.InputType)()
], WhereUniqueInputUid);
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
(0, graphql_1.registerEnumType)(client_1.Prisma.SortOrder, {
    name: 'SortOrder',
});
let AggregateCountOutput = class AggregateCountOutput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AggregateCountOutput = AggregateCountOutput;
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], AggregateCountOutput.prototype, "count", void 0);
exports.AggregateCountOutput = AggregateCountOutput = __decorate([
    (0, graphql_1.ObjectType)()
], AggregateCountOutput);
let LocationFilterInput = class LocationFilterInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.LocationFilterInput = LocationFilterInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {}),
    __metadata("design:type", Number)
], LocationFilterInput.prototype, "ne_lat", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {}),
    __metadata("design:type", Number)
], LocationFilterInput.prototype, "ne_lng", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {}),
    __metadata("design:type", Number)
], LocationFilterInput.prototype, "sw_lat", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {}),
    __metadata("design:type", Number)
], LocationFilterInput.prototype, "sw_lng", void 0);
exports.LocationFilterInput = LocationFilterInput = __decorate([
    (0, graphql_1.InputType)()
], LocationFilterInput);
let PaginationInput = class PaginationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaginationInput = PaginationInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "skip", void 0);
exports.PaginationInput = PaginationInput = __decorate([
    (0, graphql_1.ArgsType)()
], PaginationInput);
//# sourceMappingURL=common.input.js.map