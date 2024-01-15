import { ObjectType } from '@nestjs/graphql'
import { Mention as MentionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Mention implements RestrictProperties<Mention,MentionType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
