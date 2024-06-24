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
exports.UniteEnseignementOrderByRelationAggregateInput = exports.UniteEnseignementOrderByWithRelationInput = exports.UniteEnseignementOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../matieres/dtos/order-by.args");
const order_by_args_2 = require("../../semestres/dtos/order-by.args");
let UniteEnseignementOrderByWithRelationInputStrict = class UniteEnseignementOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementOrderByWithRelationInputStrict = UniteEnseignementOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", Object)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "semestreId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.SemestreOrderByWithRelationInput, {}),
    __metadata("design:type", order_by_args_2.SemestreOrderByWithRelationInput)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "semestre", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.MatiereOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_1.MatiereOrderByRelationAggregateInput)
], UniteEnseignementOrderByWithRelationInputStrict.prototype, "matieres", void 0);
exports.UniteEnseignementOrderByWithRelationInputStrict = UniteEnseignementOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementOrderByWithRelationInputStrict);
let UniteEnseignementOrderByWithRelationInput = class UniteEnseignementOrderByWithRelationInput extends (0, graphql_1.PartialType)(UniteEnseignementOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementOrderByWithRelationInput = UniteEnseignementOrderByWithRelationInput;
exports.UniteEnseignementOrderByWithRelationInput = UniteEnseignementOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementOrderByWithRelationInput);
let UniteEnseignementOrderByRelationAggregateInput = class UniteEnseignementOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementOrderByRelationAggregateInput = UniteEnseignementOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], UniteEnseignementOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.UniteEnseignementOrderByRelationAggregateInput = UniteEnseignementOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map