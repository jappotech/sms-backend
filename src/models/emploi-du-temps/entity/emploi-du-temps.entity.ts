import { Field, ObjectType } from '@nestjs/graphql'
import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EmploiDuTemps implements RestrictProperties<EmploiDuTemps, EmploiDuTempsType> {

    @Field()
    id: number

    @Field()
    coursId: number

    @Field()
    classeId: number

    @Field()
    professeurId: number

    @Field()
    salleId: number

    @Field()
    dateDebut: Date

    @Field()
    dateFin: Date
}
