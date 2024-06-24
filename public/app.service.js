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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let AppService = class AppService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getHello() {
        return 'Hello World!';
    }
    genererMatricule() {
        return 'MAT' + Math.floor(Math.random() * 1000000);
    }
    async genererCodeUE(id) {
        const ue = await this.prisma.ue.findUnique(id);
        const semestre = await this.prisma.semestre.findUnique(ue.semestreId);
        const code_ue = ue.numero;
        const code_semestre = semestre.numero;
        const grade = semestre.grade.split(' ');
        const code_niveau = grade
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        const classe = await this.prisma.classe.findUnique(semestre.classeId);
        const specialite = await this.prisma.specialite.findUnique(classe.specialiteId);
        const code_specialite = specialite.nom
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        const code_annee = this.getNumeroAnnee(semestre.numero);
        const code = code_niveau + code_specialite + code_annee + code_semestre + code_ue;
        return code;
    }
    genererCodeMatiere(id) {
        return `FIL${Math.floor(Math.random() * id)}`;
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
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
//# sourceMappingURL=app.service.js.map