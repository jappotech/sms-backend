import { InputType, PickType } from '@nestjs/graphql'
import { Matiere } from '../entity/matiere.entity'

@InputType()
export class CreateMatiereInput extends PickType(Matiere, ['code', 'credit', 'nbHeure', 'nom', 'uniteEnseigmentId'], InputType) { }

