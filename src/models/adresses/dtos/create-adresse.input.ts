import { InputType, PickType } from '@nestjs/graphql'
import { Adresse } from '../entity/adresse.entity'

@InputType()
export class CreateAdresseInput extends PickType(
  Adresse,
  ['codePostal', 'ville', 'pays', 'region', 'geolocalisation'],
  InputType
) { }

