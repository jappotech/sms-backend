import { CreateReseauSocialInput } from './create-reseau-social.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { ReseauSocial } from '@prisma/client';

@InputType()
export class UpdateReseauSocialInput extends PartialType(
  CreateReseauSocialInput,
) {
  id: ReseauSocial['id'];
}
