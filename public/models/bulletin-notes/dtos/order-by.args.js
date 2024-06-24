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
exports.BulletinNotesOrderByRelationAggregateInput = exports.BulletinNotesOrderByWithRelationInput = exports.BulletinNotesOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let BulletinNotesOrderByWithRelationInputStrict = class BulletinNotesOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotesOrderByWithRelationInputStrict = BulletinNotesOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "uniteEnseignementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "matiereId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "noteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "moyenne", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "resultat", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInputStrict.prototype, "_count", void 0);
exports.BulletinNotesOrderByWithRelationInputStrict = BulletinNotesOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesOrderByWithRelationInputStrict);
let BulletinNotesOrderByWithRelationInput = class BulletinNotesOrderByWithRelationInput extends (0, graphql_1.PartialType)(BulletinNotesOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotesOrderByWithRelationInput = BulletinNotesOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByWithRelationInput.prototype, "_count", void 0);
exports.BulletinNotesOrderByWithRelationInput = BulletinNotesOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesOrderByWithRelationInput);
let BulletinNotesOrderByRelationAggregateInput = class BulletinNotesOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotesOrderByRelationAggregateInput = BulletinNotesOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], BulletinNotesOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.BulletinNotesOrderByRelationAggregateInput = BulletinNotesOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], BulletinNotesOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map