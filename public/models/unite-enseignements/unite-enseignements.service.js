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
exports.UniteEnseignementsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let UniteEnseignementsService = class UniteEnseignementsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUniteEnseignementInput) {
        const ue = await this.prisma.uniteEnseignement.create({
            data: createUniteEnseignementInput,
        });
        const newUe = await ue;
        this.setNumeroUe(newUe.semestreId, newUe);
        return ue;
    }
    findAll(args) {
        return this.prisma.uniteEnseignement.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.uniteEnseignement.findMany({
            ...args,
            where: {
                ...args.where,
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
            orderBy: {
                id: 'asc'
            }
        });
    }
    findOne(args) {
        return this.prisma.uniteEnseignement.findUnique(args);
    }
    update(updateUniteEnseignementInput) {
        const { id, ...data } = updateUniteEnseignementInput;
        return this.prisma.uniteEnseignement.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.uniteEnseignement.delete(args);
    }
    async genererCodeUE(id) {
        const ue = await this.prisma.uniteEnseignement.findUnique({
            where: {
                id: id,
            },
        });
        const semestre = await this.prisma.semestre.findUnique({
            where: {
                id: ue.semestreId,
            },
        });
        const code_ue = ue.numero;
        const code_semestre = semestre.numero;
        const code_annee = this.getNumeroAnnee(semestre.numero);
        const code = code_annee.toString() + code_semestre.toString() + code_ue.toString();
        return code.toString();
    }
    getNumeroAnnee(numeroSemestre) {
        let code_annee = 1;
        if (numeroSemestre === 1 || numeroSemestre === 2) {
            code_annee = 1;
        }
        else if (numeroSemestre === 3 || numeroSemestre === 4) {
            code_annee = 2;
        }
        else if (numeroSemestre === 5 || numeroSemestre === 6) {
            code_annee = 3;
        }
        else if (numeroSemestre === 7 || numeroSemestre === 8) {
            code_annee = 4;
        }
        else if (numeroSemestre === 9 || numeroSemestre === 10) {
            code_annee = 5;
        }
        return code_annee;
    }
    async setNumeroUe(semestreId, newUe) {
        console.log("🚀 ~ :", semestreId, newUe);
        const list = await this.prisma.uniteEnseignement.findMany({
            where: {
                semestreId
            },
            orderBy: {
                id: 'asc'
            }
        });
        console.log("🚀 ~ UniteEnseignementsService ~ setNumeroUe ~ list:", list);
        const semestre = await this.prisma.semestre.findUnique({ where: { id: semestreId } });
        if (list.length === 0) {
            const data = { ...newUe, numero: 1, code: `${this.getNumeroAnnee(semestre.numero)}${semestre.numero}1` };
            this.prisma.uniteEnseignement.update({
                where: { id: newUe.id },
                data: data,
            });
        }
        else {
            list.map(async (ue, index) => {
                const data = { ...ue, numero: index + 1, code: `${this.getNumeroAnnee(semestre.numero)}${semestre.numero}${index + 1}` };
                const res = await this.prisma.uniteEnseignement.update({
                    where: { id: ue.id },
                    data: data,
                });
                console.log("🚀 ~ res:", res);
            });
        }
    }
};
exports.UniteEnseignementsService = UniteEnseignementsService;
exports.UniteEnseignementsService = UniteEnseignementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UniteEnseignementsService);
//# sourceMappingURL=unite-enseignements.service.js.map