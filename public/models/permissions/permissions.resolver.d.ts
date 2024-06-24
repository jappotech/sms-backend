import { PermissionsService } from './permissions.service';
import { FindManyPermissionArgs, FindUniquePermissionArgs } from './dtos/find.args';
import { CreatePermissionInput } from './dtos/create-permission.input';
import { UpdatePermissionInput } from './dtos/update-permission.input';
import { GetUserType } from 'src/common/types';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PermissionsResolver {
    private readonly permissionsService;
    private readonly prisma;
    constructor(permissionsService: PermissionsService, prisma: PrismaService);
    createPermission(args: CreatePermissionInput, user: GetUserType): Prisma.Prisma__PermissionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(args: FindManyPermissionArgs): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }[]>;
    findOne(args: FindUniquePermissionArgs): Prisma.Prisma__PermissionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updatePermission(args: UpdatePermissionInput, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }>;
    removePermission(args: FindUniquePermissionArgs, user: GetUserType): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }>;
}
