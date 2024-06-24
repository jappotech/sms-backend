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
exports.EmploiDuTemps = void 0;
const graphql_1 = require("@nestjs/graphql");
let EmploiDuTemps = class EmploiDuTemps {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EmploiDuTemps = EmploiDuTemps;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmploiDuTemps.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], EmploiDuTemps.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], EmploiDuTemps.prototype, "dateFin", void 0);
exports.EmploiDuTemps = EmploiDuTemps = __decorate([
    (0, graphql_1.ObjectType)()
], EmploiDuTemps);
//# sourceMappingURL=emploi-du-temps.entity.js.map