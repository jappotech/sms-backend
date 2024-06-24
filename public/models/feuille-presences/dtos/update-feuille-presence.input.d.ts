import { CreateFeuillePresenceInput } from './create-feuille-presence.input';
import { FeuillePresence } from '@prisma/client';
declare const UpdateFeuillePresenceInput_base: import("@nestjs/common").Type<Partial<CreateFeuillePresenceInput>>;
export declare class UpdateFeuillePresenceInput extends UpdateFeuillePresenceInput_base {
    id: FeuillePresence['id'];
}
export {};
