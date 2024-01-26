import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Semestre as SemestreType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Semestre implements RestrictProperties<Semestre, SemestreType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    numero: number

    @Field(type => String)
    grade: $Enums.TypeDiplome

    @Field({ nullable: true })
    dateDebut: Date

    @Field({ nullable: true })
    dateFin: Date

    @Field({ nullable: true })
    nombreSemaine: number

    @Field({ nullable: true })
    classeId: number
}
