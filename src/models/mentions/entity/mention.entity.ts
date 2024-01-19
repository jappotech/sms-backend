import { Field, ObjectType } from '@nestjs/graphql'
import { Mention as MentionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Mention implements RestrictProperties<Mention, MentionType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    nom: string

    @Field()
    slug: string

    @Field()
    domaineId: number
}
