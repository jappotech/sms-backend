import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { UtilisateurOrderByWithRelationInput } from 'src/models/utilisateurs/dtos/order-by.args';

@InputType()
export class ProfesseurOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ProfesseurOrderByWithRelationInputStrict,
      Prisma.ProfesseurOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  profileId: Prisma.SortOrder;

  @Field(() => UtilisateurOrderByWithRelationInput, { nullable: true })
  profile: UtilisateurOrderByWithRelationInput;

  @Field(() => CoursOrderByRelationAggregateInput, { nullable: true })
  cours: CoursOrderByRelationAggregateInput;

  @Field(() => EmploiDuTempsOrderByRelationAggregateInput, { nullable: true })
  EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}

@InputType()
export class ProfesseurOrderByWithRelationInput extends PartialType(
  ProfesseurOrderByWithRelationInputStrict,
) {}

@InputType()
export class ProfesseurOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
