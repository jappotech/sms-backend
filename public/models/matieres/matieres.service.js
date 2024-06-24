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
exports.MatieresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let MatieresService = class MatieresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMatiereInput) {
        const res = this.prisma.matiere.create({
            data: { ...createMatiereInput, code: '' },
        });
        const matiere = await res;
        this.setNumeroMatiere(matiere.uniteEnseignementId, matiere);
        return res;
    }
    findAll(args) {
        return this.prisma.matiere.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.matiere.findMany({
            ...args,
            where: {
                ...args.where,
                uniteEnseignement: {
                    is: {
                        semestre: {
                            is: {
                                Classe: {
                                    is: {
                                        etablissementId: {
                                            equals: etablissementId,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.matiere.findUnique(args);
    }
    update(updateMatiereInput) {
        const { id, ...data } = updateMatiereInput;
        return this.prisma.matiere.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.matiere.delete(args);
    }
    async setNumeroMatiere(ueId, matiere) {
        const list = await this.prisma.matiere.findMany({
            where: {
                uniteEnseignementId: ueId
            },
            orderBy: {
                id: 'asc'
            }
        });
        const ue = await this.prisma.uniteEnseignement.findUnique({
            where: { id: ueId }
        });
        if (list.length === 0) {
            const data = { ...matiere, code: `${ue.code}1` };
            this.prisma.matiere.update({
                where: { id: matiere.id },
                data: data,
            });
        }
        else {
            list.map(async (m, index) => {
                const data = { ...m, code: `${ue.code}${index + 1}` };
                const res = await this.prisma.matiere.update({
                    where: { id: m.id },
                    data: data,
                });
                console.log("🚀 ~ MatieresService ~ list.map ~ res:", res);
            });
        }
    }
};
exports.MatieresService = MatieresService;
exports.MatieresService = MatieresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MatieresService);
//# sourceMappingURL=matieres.service.js.map