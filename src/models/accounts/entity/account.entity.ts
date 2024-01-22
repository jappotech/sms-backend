import { Field, ID, ObjectType } from '@nestjs/graphql'
import { $Enums, Account as AccountType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Account implements RestrictProperties<Account, AccountType> {
    @Field(() => ID)
    id: number

    @Field()
    uid: string

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    username: string

    @Field()
    password: string

    @Field(() => [String], { defaultValue: [$Enums.Role.UTILISATEUR] })
    roles: $Enums.Role[]

    @Field({ defaultValue: true })
    isActive: boolean

    @Field({ nullable: true })
    userId: number
}
