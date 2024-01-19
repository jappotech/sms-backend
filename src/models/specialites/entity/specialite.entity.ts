import { Field, ObjectType } from '@nestjs/graphql'
import { Specialite as SpecialiteType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Specialite implements RestrictProperties<Specialite, SpecialiteType> {
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

    @Field({ nullable: true })
    mentionId: number
}
