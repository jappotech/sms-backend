import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { EtablissementOrderByRelationAggregateInput } from 'src/models/etablissements/dtos/order-by.args'
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args'

@InputType()
export class AdresseOrderByWithRelationInputStrict
  implements RestrictProperties<AdresseOrderByWithRelationInputStrict, Prisma.AdresseOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  pays: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  region: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  ville: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  codePostal: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  geolocalisation: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => UtilisateurOrderByRelationAggregateInput, { nullable: true })
  utilisateurs: UtilisateurOrderByRelationAggregateInput

  @Field(() => EtablissementOrderByRelationAggregateInput, { nullable: true })
  etablissements: EtablissementOrderByRelationAggregateInput
}


@InputType()
export class AdresseOrderByWithRelationInput extends PartialType(
  AdresseOrderByWithRelationInputStrict,
) { }

@InputType()
export class AdresseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
