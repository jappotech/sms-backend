"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressesModule = void 0;
const common_1 = require("@nestjs/common");
const adresses_service_1 = require("./adresses.service");
const adresses_resolver_1 = require("./adresses.resolver");
let AdressesModule = class AdressesModule {
};
exports.AdressesModule = AdressesModule;
exports.AdressesModule = AdressesModule = __decorate([
    (0, common_1.Module)({
        providers: [adresses_resolver_1.AdressesResolver, adresses_service_1.AdressesService],
        exports: [adresses_service_1.AdressesService],
    })
], AdressesModule);
//# sourceMappingURL=adresses.module.js.map