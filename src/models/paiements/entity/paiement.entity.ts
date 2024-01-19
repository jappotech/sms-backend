import { Field, ObjectType } from '@nestjs/graphql'
import { Paiement as PaiementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Paiement implements RestrictProperties<Paiement, PaiementType> {
    @Field()
    id: number

    @Field()
    etudiantId: number

    @Field()
    montant: number

    @Field()
    datePaiement: Date

    @Field()
    methodePaiement: string

    @Field()
    referencePaiement: string

    @Field()
    typeFrais: string

    @Field()
    statutPaiement: string
}
