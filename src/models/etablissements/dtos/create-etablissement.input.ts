import { Field, InputType, PickType } from '@nestjs/graphql'
import { Etablissement } from '../entity/etablissement.entity'
import { CreateDomaineInput, CreateDomaineInputWithId } from 'src/models/domaines/dtos/create-domaine.input'

@InputType()
export class etablissementWithDomaines extends Etablissement {
  @Field({ nullable: true })
  domaines: CreateDomaineInputWithId[]
}

@InputType()
export class CreateEtablissementInput extends PickType(etablissementWithDomaines, ['adresseId', 'contactId', 'dateCreation', 'logo', 'matricule', 'nom', 'sigle', 'domaines'], InputType) { }