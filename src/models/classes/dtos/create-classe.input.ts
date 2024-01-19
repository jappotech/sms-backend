import { InputType, PickType } from '@nestjs/graphql'
import { Classe } from '../entity/classe.entity'

@InputType()
export class CreateClasseInput extends PickType(Classe, ['code', 'nom', 'etablissementId', 'specialiteId'], InputType) { }

