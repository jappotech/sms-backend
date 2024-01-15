import { ObjectType } from '@nestjs/graphql'
import { FeuillePresence as FeuillePresenceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class FeuillePresence implements RestrictProperties<FeuillePresence,FeuillePresenceType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
