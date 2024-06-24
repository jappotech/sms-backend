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
exports.EtablissementsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const slugify_1 = require("slugify");
let EtablissementsService = class EtablissementsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEtablissementInput) {
        const { domaines, ...data } = createEtablissementInput;
        const matricule = (0, slugify_1.default)(`${data.nom}`).toUpperCase();
        const etablissement = await this.prisma.etablissement.create({
            data: { ...data, matricule },
        });
        if (domaines && domaines.length > 0) {
            const domaineIds = domaines.map((domaine) => domaine.id);
            await this.prisma.etablissement.update({
                where: { id: etablissement.id },
                data: {
                    domaines: {
                        connect: domaineIds.map((id) => ({ id })),
                    },
                },
            });
        }
        return etablissement;
    }
    findAll(args) {
        return this.prisma.etablissement.findMany(args);
    }
    findOne(args) {
        return this.prisma.etablissement.findUnique(args);
    }
    update(updateEtablissementInput) {
        const { id, domaines, ...data } = updateEtablissementInput;
        if (domaines && domaines.length > 0) {
            const domaineIds = domaines.map((domaine) => domaine.id);
            return this.prisma.etablissement.update({
                where: { id },
                data: {
                    ...data,
                    domaines: {
                        connect: domaineIds.map((id) => ({ id })),
                    },
                },
            });
        }
        return this.prisma.etablissement.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.etablissement.delete(args);
    }
};
exports.EtablissementsService = EtablissementsService;
exports.EtablissementsService = EtablissementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EtablissementsService);
//# sourceMappingURL=etablissements.service.js.map