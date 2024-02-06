import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AnneeScolaireOrderByWithRelationInput } from 'src/models/annee-scolaires/dtos/order-by.args'
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args'
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args'
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args'
import { InscriptionOrderByRelationAggregateInput } from 'src/models/inscriptions/dtos/order-by.args'
import { SemestreOrderByRelationAggregateInput } from 'src/models/semestres/dtos/order-by.args'
import { SpecialiteOrderByWithRelationInput } from 'src/models/specialites/dtos/order-by.args'

@InputType()
export class ClasseOrderByWithRelationInputStrict
  implements RestrictProperties<ClasseOrderByWithRelationInputStrict, Prisma.ClasseOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  code: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  niveau: Prisma.SortOrder

  /* @Field(() => Prisma.SortOrder, { nullable: true })
  anneeScolaire: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  AnneeScolaire: AnneeScolaireOrderByWithRelationInput */

  @Field(() => Prisma.SortOrder, { nullable: true })
  etablissementId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  specialiteId: Prisma.SortOrder

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput

  @Field(() => SemestreOrderByRelationAggregateInput, { nullable: true })
  semestres: SemestreOrderByRelationAggregateInput

  @Field(() => InscriptionOrderByRelationAggregateInput, { nullable: true })
  inscriptions: InscriptionOrderByRelationAggregateInput

  @Field(() => SpecialiteOrderByWithRelationInput, { nullable: true })
  specialite: SpecialiteOrderByWithRelationInput

  @Field(() => CoursOrderByRelationAggregateInput, { nullable: true })
  Cours: CoursOrderByRelationAggregateInput

  @Field(() => EmploiDuTempsOrderByRelationAggregateInput, { nullable: true })
  EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput
}


@InputType()
export class ClasseOrderByWithRelationInput extends PartialType(
  ClasseOrderByWithRelationInputStrict,
) { }

@InputType()
export class ClasseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
