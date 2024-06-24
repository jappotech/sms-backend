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
exports.DomainesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const slugify_1 = require("slugify");
let DomainesService = class DomainesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDomaineInput) {
        const { mentions, ...data } = createDomaineInput;
        const slug = (0, slugify_1.default)(`${data.nom.toLowerCase()}`);
        const domaine = await this.prisma.domaine.create({
            data: { ...data, slug },
        });
        let createMentions;
        if (mentions && mentions.length > 0) {
            const mentionsData = mentions.map((mention) => ({
                ...mention,
                slug: (0, slugify_1.default)(`${mention.nom.toLowerCase()}`),
                domaineId: domaine.id,
            }));
            createMentions = await this.prisma.mention.createMany({
                data: mentionsData,
            });
        }
        return domaine;
    }
    findAll(args) {
        return this.prisma.domaine.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.domaine.findMany({
            ...args,
            where: {
                ...args.where,
                etablissements: {
                    some: {
                        id: etablissementId,
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.domaine.findUnique(args);
    }
    update(updateDomaineInput) {
        const { id, mentions, ...data } = updateDomaineInput;
        return this.prisma.domaine.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.domaine.delete(args);
    }
};
exports.DomainesService = DomainesService;
exports.DomainesService = DomainesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DomainesService);
//# sourceMappingURL=domaines.service.js.map