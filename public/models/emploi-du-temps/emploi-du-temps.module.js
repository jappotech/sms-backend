"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploiDuTempsModule = void 0;
const common_1 = require("@nestjs/common");
const emploi_du_temps_service_1 = require("./emploi-du-temps.service");
const emploi_du_temps_resolver_1 = require("./emploi-du-temps.resolver");
let EmploiDuTempsModule = class EmploiDuTempsModule {
};
exports.EmploiDuTempsModule = EmploiDuTempsModule;
exports.EmploiDuTempsModule = EmploiDuTempsModule = __decorate([
    (0, common_1.Module)({
        providers: [emploi_du_temps_resolver_1.EmploiDuTempsResolver, emploi_du_temps_service_1.EmploiDuTempsService],
        exports: [emploi_du_temps_service_1.EmploiDuTempsService],
    })
], EmploiDuTempsModule);
//# sourceMappingURL=emploi-du-temps.module.js.map