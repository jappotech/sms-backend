import { CreateFeuillePresenceInput } from './create-feuille-presence.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { FeuillePresence } from '@prisma/client';

@InputType()
export class UpdateFeuillePresenceInput extends PartialType(
  CreateFeuillePresenceInput,
) {
  id: FeuillePresence['id'];
}
