import { Field, ObjectType } from '@nestjs/graphql'
import { Inscription as InscriptionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Inscription implements RestrictProperties<Inscription, InscriptionType> {
    @Field()
    id: number

    @Field({ defaultValue: new Date() })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    reference: string

    @Field({ defaultValue: false })
    premiereInscription: boolean

    @Field({ nullable: true })
    dernierDiplome: string

    @Field({ nullable: true })
    autreEtablissement: string

    @Field({ nullable: true })
    activiteProfessionnel: string

    @Field({ nullable: true })
    niveau: string

    @Field({ nullable: true })
    statut: string

    @Field({ nullable: true })
    diplomeId: number

    @Field({ nullable: true })
    etudiantId: number

    @Field({ nullable: true })
    classeId: number
}
