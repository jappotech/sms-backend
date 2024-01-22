import { Field, ObjectType } from '@nestjs/graphql'
import { Cours as CoursType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Cours implements RestrictProperties<Cours, CoursType> {

    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    nom: string

    @Field({ nullable: true })
    description: string

    @Field()
    dateDebut: Date

    @Field()
    dateFin: Date

    @Field()
    heureDebut: Date

    @Field()
    heureFin: Date

    @Field()
    matiereId: number

    @Field()
    salleId: number

    @Field()
    classeId: number

    @Field()
    professeurId: number
}
