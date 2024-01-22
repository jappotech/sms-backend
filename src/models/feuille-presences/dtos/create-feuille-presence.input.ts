import { InputType, PickType } from '@nestjs/graphql'
import { FeuillePresence } from '../entity/feuille-presence.entity'

@InputType()
export class CreateFeuillePresenceInput extends PickType(FeuillePresence, ['coursId', 'date', 'etudiantId', 'heureDebut', 'heureFin'], InputType) { }

