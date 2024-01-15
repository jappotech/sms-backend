import { InputType, PickType } from '@nestjs/graphql'
import { Utilisateur } from '../entity/utilisateur.entity'

@InputType()
export class CreateUtilisateurInput extends PickType(Utilisateur, [], InputType) { }

