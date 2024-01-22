import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql'
import { Utilisateur } from '../entity/utilisateur.entity'
import { CreateAccountInput } from 'src/models/accounts/dtos/create-account.input'
import { $Enums } from '@prisma/client'

@InputType()
export class UtilisateurWithAccount implements Utilisateur {
  @Field({ nullable: true })
  id: number

  @Field()
  matricule: string

  @Field({ nullable: true })
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

  @Field(() => String, { nullable: true })
  genre: $Enums.Genre

  @Field({ nullable: true })
  nationalite: string

  @Field(type => String, { nullable: true })
  groupeSanguin: $Enums.GroupeSanguin

  @Field({ nullable: true })
  etablissementId: number

  @Field({ nullable: true })
  statutCompte: string

  @Field(type => [String], { nullable: true })
  roles: $Enums.Role[]

  @Field({ nullable: true })
  contactId: number

  @Field({ nullable: true })
  accountId: number

  @Field({ nullable: true })
  adresseId: number

  @Field()
  account: CreateAccountInput
}

@InputType()
export class CreateUtilisateurInput extends PickType(
  UtilisateurWithAccount,
  [
    'adresseId', 'nationalite', 'nom', 'prenom', 'roles', 'statutCompte', 'cni', 'account',
    'contactId', 'dateNaissance', 'etablissementId', 'genre', 'nom', 'groupeSanguin', 'lieuNaissance', 'matricule'
  ],
  InputType
) { }

