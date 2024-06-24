import { CreatePermissionInput } from './create-permission.input';
import { Permission } from '@prisma/client';
declare const UpdatePermissionInput_base: import("@nestjs/common").Type<Partial<CreatePermissionInput>>;
export declare class UpdatePermissionInput extends UpdatePermissionInput_base {
    id: Permission['id'];
}
export {};
