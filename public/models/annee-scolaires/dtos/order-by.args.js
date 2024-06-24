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
exports.AnneeScolaireOrderByRelationAggregateInput = exports.AnneeScolaireOrderByWithRelationInput = exports.AnneeScolaireOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../cours/dtos/order-by.args");
let AnneeScolaireOrderByWithRelationInputStrict = class AnneeScolaireOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AnneeScolaireOrderByWithRelationInputStrict = AnneeScolaireOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.CoursOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_1.ClasseOrderByRelationAggregateInput)
], AnneeScolaireOrderByWithRelationInputStrict.prototype, "classes", void 0);
exports.AnneeScolaireOrderByWithRelationInputStrict = AnneeScolaireOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireOrderByWithRelationInputStrict);
let AnneeScolaireOrderByWithRelationInput = class AnneeScolaireOrderByWithRelationInput extends (0, graphql_1.PartialType)(AnneeScolaireOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AnneeScolaireOrderByWithRelationInput = AnneeScolaireOrderByWithRelationInput;
exports.AnneeScolaireOrderByWithRelationInput = AnneeScolaireOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireOrderByWithRelationInput);
let AnneeScolaireOrderByRelationAggregateInput = class AnneeScolaireOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AnneeScolaireOrderByRelationAggregateInput = AnneeScolaireOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], AnneeScolaireOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.AnneeScolaireOrderByRelationAggregateInput = AnneeScolaireOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map