"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantsModule = void 0;
const common_1 = require("@nestjs/common");
const etudiants_service_1 = require("./etudiants.service");
const etudiants_resolver_1 = require("./etudiants.resolver");
const utilisateurs_module_1 = require("../utilisateurs/utilisateurs.module");
let EtudiantsModule = class EtudiantsModule {
};
exports.EtudiantsModule = EtudiantsModule;
exports.EtudiantsModule = EtudiantsModule = __decorate([
    (0, common_1.Module)({
        imports: [utilisateurs_module_1.UtilisateursModule],
        providers: [etudiants_resolver_1.EtudiantsResolver, etudiants_service_1.EtudiantsService],
        exports: [etudiants_service_1.EtudiantsService],
    })
], EtudiantsModule);
//# sourceMappingURL=etudiants.module.js.map