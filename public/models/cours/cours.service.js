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
exports.CoursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let CoursService = class CoursService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCoursInput) {
        const cours = await this.prisma.cours.create({
            data: createCoursInput,
        });
        console.log('🚀 ~ CoursService ~ create ~ createCoursInput:', cours);
        return cours;
    }
    findAll(args) {
        return this.prisma.cours.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.cours.findMany({
            ...args,
            where: {
                ...args.where,
                classe: {
                    is: {
                        etablissementId: {
                            equals: etablissementId,
                        },
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.cours.findUnique(args);
    }
    update(updateCoursInput) {
        const { id, ...data } = updateCoursInput;
        return this.prisma.cours.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.cours.delete(args);
    }
};
exports.CoursService = CoursService;
exports.CoursService = CoursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursService);
//# sourceMappingURL=cours.service.js.map