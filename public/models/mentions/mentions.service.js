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
exports.MentionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const slugify_1 = require("slugify");
let MentionsService = class MentionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMentionInput) {
        const { specialites, ...data } = createMentionInput;
        const slug = (0, slugify_1.default)(`${createMentionInput.nom.toLowerCase()}`);
        const createMention = this.prisma.mention.create({
            data: { ...data, slug },
        });
        const mention = await createMention;
        if (specialites && specialites.length > 0) {
            const specialitesData = specialites.map((specialite) => ({
                ...specialite,
                slug: (0, slugify_1.default)(`${specialite.nom.toLowerCase()}`),
                mentionId: mention.id,
            }));
            const createSpecialites = await this.prisma.specialite.createMany({
                data: specialitesData,
            });
            console.log('🚀 ~ MentionsService ~ create ~ createSpecialites:', createSpecialites);
        }
        return createMention;
    }
    findAll(args) {
        return this.prisma.mention.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.mention.findMany({
            ...args,
            where: {
                ...args.where,
                domaine: {
                    is: {
                        etablissements: {
                            some: {
                                id: etablissementId,
                            },
                        },
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.mention.findUnique(args);
    }
    update(updateMentionInput) {
        const { id, specialites, ...data } = updateMentionInput;
        return this.prisma.mention.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.mention.delete(args);
    }
};
exports.MentionsService = MentionsService;
exports.MentionsService = MentionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MentionsService);
//# sourceMappingURL=mentions.service.js.map