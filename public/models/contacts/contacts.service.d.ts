import { FindManyContactArgs, FindUniqueContactArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateContactInput } from './dtos/create-contact.input';
import { UpdateContactInput } from './dtos/update-contact.input';
import { Prisma } from '@prisma/client';
export declare class ContactsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createContactInput: CreateContactInput): Prisma.Prisma__ContactClient<{
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
    update(updateContactInput: UpdateContactInput): Prisma.Prisma__ContactClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueContactArgs): Prisma.Prisma__ContactClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        fix: string;
        fax: string;
        email: string;
        siteWeb: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
