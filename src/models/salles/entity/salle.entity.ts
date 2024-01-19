import { Field, ObjectType } from '@nestjs/graphql'
import { Salle as SalleType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Salle implements RestrictProperties<Salle, SalleType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    nom: string

    @Field({ nullable: true })
    capacite: number

    @Field({ nullable: true })
    batiment: string

    @Field()
    etablissementId: number

    @Field()
    estDisponible: boolean
}
