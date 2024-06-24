import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class PermissionWhereUniqueInput {
    id: number;
}
export declare class PermissionWhereInputStrict implements RestrictProperties<PermissionWhereInputStrict, Prisma.PermissionWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    role: Prisma.EnumRoleNullableListFilter;
    label: StringFilter;
    slug: StringFilter;
    utilisateurs: UtilisateurListRelationFilter;
    AND: PermissionWhereInput[];
    OR: PermissionWhereInput[];
    NOT: PermissionWhereInput[];
}
declare const PermissionWhereInput_base: import("@nestjs/common").Type<Partial<PermissionWhereInputStrict>>;
export declare class PermissionWhereInput extends PermissionWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    role: Prisma.EnumRoleNullableListFilter;
    label: StringFilter;
    slug: StringFilter;
    utilisateurs: UtilisateurListRelationFilter;
    AND: PermissionWhereInput[];
    OR: PermissionWhereInput[];
    NOT: PermissionWhereInput[];
}
export declare class PermissionListRelationFilter {
    every?: PermissionWhereInput;
    some?: PermissionWhereInput;
    none?: PermissionWhereInput;
}
export declare class PermissionRelationFilter {
    is?: PermissionWhereInput;
    isNot?: PermissionWhereInput;
}
export {};
