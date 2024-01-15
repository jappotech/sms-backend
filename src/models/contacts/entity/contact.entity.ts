import { ObjectType } from '@nestjs/graphql'
import { Contact as ContactType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Contact implements RestrictProperties<Contact,ContactType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
