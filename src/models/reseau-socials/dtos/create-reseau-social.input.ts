import { InputType, PickType } from '@nestjs/graphql';
import { ReseauSocial } from '../entity/reseau-social.entity';

@InputType()
export class CreateReseauSocialInput extends PickType(
  ReseauSocial,
  ['contactId', 'nom', 'url', 'username'],
  InputType,
) {}
