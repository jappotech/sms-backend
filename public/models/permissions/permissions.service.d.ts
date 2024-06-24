import { FindManyPermissionArgs, FindUniquePermissionArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreatePermissionInput } from './dtos/create-permission.input';
import { UpdatePermissionInput } from './dtos/update-permission.input';
import { Prisma } from '@prisma/client';
export declare class PermissionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPermissionInput: CreatePermissionInput): Prisma.Prisma__PermissionClient<{
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
    update(updatePermissionInput: UpdatePermissionInput): Prisma.Prisma__PermissionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(args: FindUniquePermissionArgs): Prisma.Prisma__PermissionClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role[];
        label: string;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
