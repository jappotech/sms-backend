import { InputType, PickType } from '@nestjs/graphql';
import { Paiement } from '../entity/paiement.entity';

@InputType()
export class CreatePaiementInput extends PickType(
  Paiement,
  [
    'datePaiement',
    'etudiantId',
    'methodePaiement',
    'montant',
    'referencePaiement',
    'statutPaiement',
    'typeFrais',
  ],
  InputType,
) {}
