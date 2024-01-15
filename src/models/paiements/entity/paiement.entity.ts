import { ObjectType } from '@nestjs/graphql'
import { Paiement as PaiementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Paiement implements RestrictProperties<Paiement,PaiementType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
