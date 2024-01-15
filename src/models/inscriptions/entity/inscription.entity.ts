import { ObjectType } from '@nestjs/graphql'
import { Inscription as InscriptionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Inscription implements RestrictProperties<Inscription,InscriptionType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
