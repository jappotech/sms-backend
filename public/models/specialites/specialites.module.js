"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialitesModule = void 0;
const common_1 = require("@nestjs/common");
const specialites_service_1 = require("./specialites.service");
const specialites_resolver_1 = require("./specialites.resolver");
let SpecialitesModule = class SpecialitesModule {
};
exports.SpecialitesModule = SpecialitesModule;
exports.SpecialitesModule = SpecialitesModule = __decorate([
    (0, common_1.Module)({
        providers: [specialites_resolver_1.SpecialitesResolver, specialites_service_1.SpecialitesService],
        exports: [specialites_service_1.SpecialitesService],
    })
], SpecialitesModule);
//# sourceMappingURL=specialites.module.js.map