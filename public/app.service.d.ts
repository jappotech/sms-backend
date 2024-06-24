export declare class AppService {
    prisma: any;
    constructor();
    getHello(): string;
    genererMatricule(): string;
    genererCodeUE(id: number): Promise<string>;
    genererCodeMatiere(id: number): string;
    getNumeroAnnee(numeroSemestre: number): number;
}
