"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursModule = void 0;
const common_1 = require("@nestjs/common");
const cours_service_1 = require("./cours.service");
const cours_resolver_1 = require("./cours.resolver");
let CoursModule = class CoursModule {
};
exports.CoursModule = CoursModule;
exports.CoursModule = CoursModule = __decorate([
    (0, common_1.Module)({
        providers: [cours_resolver_1.CoursResolver, cours_service_1.CoursService],
        exports: [cours_service_1.CoursService],
    })
], CoursModule);
//# sourceMappingURL=cours.module.js.map