import { Contact as ContactType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Contact implements RestrictProperties<Contact, ContactType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    fix: string;
    fax: string;
    email: string;
    siteWeb: string;
}
