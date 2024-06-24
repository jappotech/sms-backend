"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeuillePresencesModule = void 0;
const common_1 = require("@nestjs/common");
const feuille_presences_service_1 = require("./feuille-presences.service");
const feuille_presences_resolver_1 = require("./feuille-presences.resolver");
let FeuillePresencesModule = class FeuillePresencesModule {
};
exports.FeuillePresencesModule = FeuillePresencesModule;
exports.FeuillePresencesModule = FeuillePresencesModule = __decorate([
    (0, common_1.Module)({
        providers: [feuille_presences_resolver_1.FeuillePresencesResolver, feuille_presences_service_1.FeuillePresencesService],
        exports: [feuille_presences_service_1.FeuillePresencesService],
    })
], FeuillePresencesModule);
//# sourceMappingURL=feuille-presences.module.js.map