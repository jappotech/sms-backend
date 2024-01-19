import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Semestre as SemestreType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Semestre implements RestrictProperties<Semestre, SemestreType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    numero: number

    @Field(type => String)
    grade: $Enums.TypeDiplome

    @Field()
    dateDebut: Date

    @Field()
    dateFin: Date

    @Field()
    nombreSemaine: number

    @Field({ nullable: true })
    classeId: number
}
