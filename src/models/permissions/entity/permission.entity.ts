import { ObjectType } from '@nestjs/graphql'
import { Permission as PermissionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Permission implements RestrictProperties<Permission,PermissionType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
