import { AccountsService } from './accounts.service';
import { Account } from './entity/account.entity';
import { FindManyAccountArgs, FindUniqueAccountArgs } from './dtos/find.args';
import { CreateAccountInput } from './dtos/create-account.input';
import { UpdateAccountInput } from './dtos/update-account.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class AccountsResolver {
    private readonly accountsService;
    private readonly prisma;
    constructor(accountsService: AccountsService, prisma: PrismaService);
    createAccount(args: CreateAccountInput, user: GetUserType): Promise<{
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
    findAll(args: FindManyAccountArgs, user: GetUserType): import(".prisma/client").Prisma.PrismaPromise<{
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
    findOne(args: FindUniqueAccountArgs, user: GetUserType): import(".prisma/client").Prisma.Prisma__AccountClient<{
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
    updateAccount(args: UpdateAccountInput, user: GetUserType): Promise<{
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
    removeAccount(args: FindUniqueAccountArgs, user: GetUserType): Promise<{
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
    etablissementId(parent: Account): Promise<number>;
}
