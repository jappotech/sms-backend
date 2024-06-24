import { Mention as MentionType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Mention implements RestrictProperties<Mention, MentionType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    slug: string;
    domaineId: number;
}
