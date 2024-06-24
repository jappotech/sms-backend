import { $Enums, Permission as PermissionType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Permission implements RestrictProperties<Permission, PermissionType> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    role: $Enums.Role[];
    label: string;
    slug: string;
}
