import { InputType, PickType } from '@nestjs/graphql';
import { Diplome } from '../entity/diplome.entity';

@InputType()
export class CreateDiplomeInput extends PickType(
  Diplome,
  [
    'dateCreation',
    'dateEcheance',
    'dateHabilitation',
    'duree',
    'entite',
    'finalite',
    'habilitation',
    'nom',
    'partenaires',
    'specialiteId',
  ],
  InputType,
) {}
