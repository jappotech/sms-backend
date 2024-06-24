import { ContactsService } from './contacts.service';
import { FindManyContactArgs, FindUniqueContactArgs } from './dtos/find.args';
import { CreateContactInput } from './dtos/create-contact.input';
import { UpdateContactInput } from './dtos/update-contact.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ContactsResolver {
    private readonly contactsService;
    private readonly prisma;
    constructor(contactsService: ContactsService, prisma: PrismaService);
    createContact(args: CreateContactInput, user: GetUserType): Prisma.Prisma__ContactClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyContactArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }[]>;
    findOne(args: FindUniqueContactArgs): Prisma.Prisma__ContactClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateContact(args: UpdateContactInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }>;
    removeContact(args: FindUniqueContactArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }>;
}
