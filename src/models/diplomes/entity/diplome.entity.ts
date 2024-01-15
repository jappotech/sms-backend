import { ObjectType } from '@nestjs/graphql'
import { Diplome as DiplomeType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Diplome implements RestrictProperties<Diplome,DiplomeType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
