import { Field, ObjectType } from '@nestjs/graphql'
import { Paiement as PaiementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Paiement implements RestrictProperties<Paiement, PaiementType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    etudiantId: number

    @Field({ nullable: true })
    montant: number

    @Field({ nullable: true })
    datePaiement: Date

    @Field({ nullable: true })
    methodePaiement: string

    @Field({ nullable: true })
    referencePaiement: string

    @Field({ nullable: true })
    typeFrais: string

    @Field({ nullable: true })
    statutPaiement: string
}
