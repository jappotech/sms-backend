import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args';
import { ReseauSocialOrderByRelationAggregateInput } from 'src/models/reseau-socials/dtos/order-by.args';
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args';

@InputType()
export class ContactOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ContactOrderByWithRelationInputStrict,
      Prisma.ContactOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  telephone: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  fix: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  fax: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  email: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  siteWeb: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => ReseauSocialOrderByRelationAggregateInput, { nullable: true })
  reseauxSociaux: ReseauSocialOrderByRelationAggregateInput;

  @Field(() => UtilisateurOrderByRelationAggregateInput, { nullable: true })
  utilisateurs: UtilisateurOrderByRelationAggregateInput;

  @Field(() => EtablissementOrderByRelationAggregateInput, { nullable: true })
  etablissements: EtablissementOrderByRelationAggregateInput;
}

@InputType()
export class ContactOrderByWithRelationInput extends PartialType(
  ContactOrderByWithRelationInputStrict,
) {}

@InputType()
export class ContactOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
