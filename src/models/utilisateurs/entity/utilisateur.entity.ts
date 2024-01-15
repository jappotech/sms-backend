import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, Utilisateur as UtilisateurType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Utilisateur implements RestrictProperties<Utilisateur, UtilisateurType> {
    @Field()
    id: number

    @Field()
    matricule: string

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    prenom: string

    @Field()
    nom: string

    @Field({ nullable: true })
    dateNaissance: Date

    @Field({ nullable: true })
    lieuNaissance: string

    @Field({ nullable: true })
    cni: string

    @Field()
    genre: $Enums.Genre

    @Field({ nullable: true })
    nationalite: string

    @Field({ nullable: true })
    groupeSanguin: $Enums.GroupeSanguin

    @Field({ nullable: true })
    etablissementId: number

    @Field({ nullable: true })
    statutCompte: string

    @Field()
    roles: $Enums.Role[]

    @Field({ nullable: true })
    contactId: number

    @Field({ nullable: true })
    adresseId: number
}
