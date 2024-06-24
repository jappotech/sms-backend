import { FeuillePresence as FeuillePresenceType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class FeuillePresence implements RestrictProperties<FeuillePresence, FeuillePresenceType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    date: Date;
    heureDebut: Date;
    heureFin: Date;
    coursId: number;
    etudiantId: number;
}
