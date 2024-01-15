import { ObjectType } from '@nestjs/graphql'
import { Adresse as AdresseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Adresse implements RestrictProperties<Adresse,AdresseType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
