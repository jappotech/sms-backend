import { InputType, PickType } from '@nestjs/graphql'
import { Etablissement } from '../entity/etablissement.entity'

@InputType()
export class CreateEtablissementInput extends PickType(Etablissement, ['adresseId', 'contactId', 'dateCreation', 'logo', 'matricule', 'nom', 'sigle'], InputType) { }