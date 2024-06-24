import { ReseauSocial as ReseauSocialType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class ReseauSocial implements RestrictProperties<ReseauSocial, ReseauSocialType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    username: string;
    url: string;
    contactId: number;
}
