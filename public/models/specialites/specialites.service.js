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
exports.SpecialitesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const slugify_1 = require("slugify");
let SpecialitesService = class SpecialitesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSpecialiteInput) {
        const slug = (0, slugify_1.default)(`${createSpecialiteInput.mentionId} ${createSpecialiteInput.etablissementId || 0} ${createSpecialiteInput.nom.toLowerCase()}`);
        return this.prisma.specialite.create({
            data: { ...createSpecialiteInput, slug },
        });
    }
    findAll(args) {
        return this.prisma.specialite.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.specialite.findMany({
            ...args,
            where: {
                ...args.where,
                etablissementId: {
                    equals: etablissementId,
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.specialite.findUnique(args);
    }
    update(updateSpecialiteInput) {
        const { id, ...data } = updateSpecialiteInput;
        return this.prisma.specialite.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.specialite.delete(args);
    }
};
exports.SpecialitesService = SpecialitesService;
exports.SpecialitesService = SpecialitesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpecialitesService);
//# sourceMappingURL=specialites.service.js.map