import { FindManyAccountArgs, FindUniqueAccountArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAccountInput } from './dtos/create-account.input';
import { UpdateAccountInput } from './dtos/update-account.input';
export declare class AccountsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAccountInput: CreateAccountInput): Promise<{
        id: number;
        uid: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        roles: import(".prisma/client").$Enums.Role[];
        isActive: boolean;
        userId: number;
    }>;
    findAll(args: FindManyAccountArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        uid: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        roles: import(".prisma/client").$Enums.Role[];
        isActive: boolean;
        userId: number;
    }[]>;
    findOne(args: FindUniqueAccountArgs): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        uid: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        roles: import(".prisma/client").$Enums.Role[];
        isActive: boolean;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateAccountInput: UpdateAccountInput): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        uid: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        roles: import(".prisma/client").$Enums.Role[];
        isActive: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniqueAccountArgs): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        uid: string;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        roles: import(".prisma/client").$Enums.Role[];
        isActive: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
