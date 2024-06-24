import { FeuillePresence } from '../entity/feuille-presence.entity';
declare const CreateFeuillePresenceInput_base: import("@nestjs/common").Type<Pick<FeuillePresence, "coursId" | "heureDebut" | "heureFin" | "date" | "etudiantId">>;
export declare class CreateFeuillePresenceInput extends CreateFeuillePresenceInput_base {
}
export {};
