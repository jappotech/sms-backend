"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesseursModule = void 0;
const common_1 = require("@nestjs/common");
const professeurs_service_1 = require("./professeurs.service");
const professeurs_resolver_1 = require("./professeurs.resolver");
const utilisateurs_module_1 = require("../utilisateurs/utilisateurs.module");
let ProfesseursModule = class ProfesseursModule {
};
exports.ProfesseursModule = ProfesseursModule;
exports.ProfesseursModule = ProfesseursModule = __decorate([
    (0, common_1.Module)({
        imports: [utilisateurs_module_1.UtilisateursModule],
        providers: [professeurs_resolver_1.ProfesseursResolver, professeurs_service_1.ProfesseursService],
        exports: [professeurs_service_1.ProfesseursService],
    })
], ProfesseursModule);
//# sourceMappingURL=professeurs.module.js.map