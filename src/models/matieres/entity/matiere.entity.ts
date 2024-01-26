import { Field, ObjectType } from '@nestjs/graphql'
import { Matiere as MatiereType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Matiere implements RestrictProperties<Matiere, MatiereType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    code: string

    @Field({ nullable: true })
    nom: string

    @Field({ nullable: true })
    credit: number

    @Field({ nullable: true })
    nbHeure: number

    @Field({ nullable: true })
    uniteEnseigmentId: number
}
