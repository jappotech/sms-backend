import { $Enums } from '@prisma/client';

export type Role = $Enums.Role;

export type GetUserType = {
  uid: string;
  roles: $Enums.Role[];
};
