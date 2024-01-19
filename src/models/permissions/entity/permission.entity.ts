import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Permission as PermissionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Permission implements RestrictProperties<Permission, PermissionType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field(() => [String])
    role: $Enums.Role[]

    @Field()
    label: string

    @Field()
    slug: string
}
