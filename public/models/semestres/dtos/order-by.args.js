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
exports.SemestreOrderByRelationAggregateInput = exports.SemestreOrderByWithRelationInput = exports.SemestreOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../unite-enseignements/dtos/order-by.args");
let SemestreOrderByWithRelationInputStrict = class SemestreOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreOrderByWithRelationInputStrict = SemestreOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "nombreSemaine", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], SemestreOrderByWithRelationInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", Object)
], SemestreOrderByWithRelationInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.UniteEnseignementOrderByRelationAggregateInput, {}),
    __metadata("design:type", order_by_args_2.UniteEnseignementOrderByRelationAggregateInput)
], SemestreOrderByWithRelationInputStrict.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ClasseOrderByWithRelationInput, {}),
    __metadata("design:type", order_by_args_1.ClasseOrderByWithRelationInput)
], SemestreOrderByWithRelationInputStrict.prototype, "Classe", void 0);
exports.SemestreOrderByWithRelationInputStrict = SemestreOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], SemestreOrderByWithRelationInputStrict);
let SemestreOrderByWithRelationInput = class SemestreOrderByWithRelationInput extends (0, graphql_1.PartialType)(SemestreOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreOrderByWithRelationInput = SemestreOrderByWithRelationInput;
exports.SemestreOrderByWithRelationInput = SemestreOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], SemestreOrderByWithRelationInput);
let SemestreOrderByRelationAggregateInput = class SemestreOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.SemestreOrderByRelationAggregateInput = SemestreOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], SemestreOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.SemestreOrderByRelationAggregateInput = SemestreOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], SemestreOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map