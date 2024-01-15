import { ObjectType } from '@nestjs/graphql'
import { Domaine as DomaineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Domaine implements RestrictProperties<Domaine,DomaineType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
