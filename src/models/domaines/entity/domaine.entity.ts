import { Field, ObjectType } from '@nestjs/graphql'
import { Domaine as DomaineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Domaine implements RestrictProperties<Domaine, DomaineType> {

    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    nom: string

    @Field({ nullable: true })
    slug: string
}
