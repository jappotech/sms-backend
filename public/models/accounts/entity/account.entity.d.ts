import { $Enums, Account as AccountType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Account implements RestrictProperties<Account, AccountType> {
    id: number;
    uid: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    password: string;
    roles: $Enums.Role[];
    isActive: boolean;
    userId: number;
}
