import { Field, ObjectType } from '@nestjs/graphql'
import { Professeur as ProfesseurType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Professeur implements RestrictProperties<Professeur, ProfesseurType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    profileId: number
}
