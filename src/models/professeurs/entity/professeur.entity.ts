import { ObjectType } from '@nestjs/graphql'
import { Professeur as ProfesseurType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Professeur implements RestrictProperties<Professeur,ProfesseurType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
