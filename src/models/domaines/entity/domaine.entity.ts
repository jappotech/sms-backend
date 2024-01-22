import { Field, ObjectType } from '@nestjs/graphql'
import { Domaine as DomaineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Domaine implements RestrictProperties<Domaine, DomaineType> {

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
}
