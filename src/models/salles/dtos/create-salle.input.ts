import { InputType, PickType } from '@nestjs/graphql';
import { Salle } from '../entity/salle.entity';

@InputType()
export class CreateSalleInput extends PickType(
  Salle,
  ['batiment', 'capacite', 'estDisponible', 'etablissementId', 'nom'],
  InputType,
) {}
