import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { FeuillePresenceOrderByRelationAggregateInput } from 'src/models/feuille-presences/dtos/order-by.args';
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args';
import { NoteEtudiantOrderByRelationAggregateInput } from 'src/models/note-etudiants/dtos/order-by.args';
import { PaiementOrderByRelationAggregateInput } from 'src/models/paiements/dtos/order-by.args';
import { UtilisateurOrderByWithRelationInput } from 'src/models/utilisateurs/dtos/order-by.args';

@InputType()
export class EtudiantOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      EtudiantOrderByWithRelationInputStrict,
      Prisma.EtudiantOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  slug: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  ine: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  baccaleaureat: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  anneeBaccaleaureat: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  profileId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  feuillePresencesId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => UtilisateurOrderByWithRelationInput, { nullable: true })
  profile: UtilisateurOrderByWithRelationInput;

  @Field(() => InscriptionOrderByRelationAggregateInput, { nullable: true })
  inscriptions: InscriptionOrderByRelationAggregateInput;

  @Field(() => NoteEtudiantOrderByRelationAggregateInput, { nullable: true })
  notes: NoteEtudiantOrderByRelationAggregateInput;

  @Field(() => FeuillePresenceOrderByRelationAggregateInput, { nullable: true })
  feuillePresences: FeuillePresenceOrderByRelationAggregateInput;

  @Field(() => PaiementOrderByRelationAggregateInput, { nullable: true })
  Paiement: PaiementOrderByRelationAggregateInput;
}

@InputType()
export class EtudiantOrderByWithRelationInput extends PartialType(
  EtudiantOrderByWithRelationInputStrict,
) {}

@InputType()
export class EtudiantOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
