import { Field, ObjectType } from '@nestjs/graphql'
import { Etablissement as EtablissementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Etablissement implements RestrictProperties<Etablissement, EtablissementType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    nom: string

    @Field({ nullable: true })
    matricule: string

    @Field({ nullable: true })
    sigle: string

    @Field({ nullable: true })
    dateCreation: Date

    @Field({ nullable: true })
    logo: string

    @Field({ nullable: true })
    adresseId: number

    @Field({ nullable: true })
    contactId: number
}
