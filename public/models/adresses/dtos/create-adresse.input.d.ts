import { Adresse } from '../entity/adresse.entity';
declare const CreateAdresseInput_base: import("@nestjs/common").Type<Pick<Adresse, "pays" | "region" | "ville" | "codePostal" | "geolocalisation">>;
export declare class CreateAdresseInput extends CreateAdresseInput_base {
}
export {};
