import { Field, ObjectType } from '@nestjs/graphql'
import { Matiere as MatiereType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Matiere implements RestrictProperties<Matiere, MatiereType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    code: string

    @Field()
    nom: string

    @Field({ nullable: true })
    credit: number

    @Field({ nullable: true })
    nbHeure: number

    @Field({ nullable: true })
    uniteEnseigmentId: number
}
