import { InputType, PickType } from '@nestjs/graphql';
import { UniteEnseignement } from '../entity/unite-enseignement.entity';

@InputType()
export class CreateUniteEnseignementInput extends PickType(
  UniteEnseignement,
  ['code', 'credit', 'nom', 'numero', 'semestreId'],
  InputType,
) { }
