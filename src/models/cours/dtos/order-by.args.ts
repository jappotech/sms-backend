import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import {
  AnneeScolaireOrderByRelationAggregateInput,
  AnneeScolaireOrderByWithRelationInput,
} from 'src/models/annee-scolaires/dtos/order-by.args';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { EvaluationEtudiantsOrderByRelationAggregateInput } from 'src/models/evaluation-etudiants/dtos/order-by.args';
import { FeuillePresenceOrderByRelationAggregateInput } from 'src/models/feuille-presences/dtos/order-by.args';
import { MatiereOrderByWithRelationInput } from 'src/models/matieres/dtos/order-by.args';
import { NoteEtudiantOrderByRelationAggregateInput } from 'src/models/note-etudiants/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';
import { SalleOrderByWithRelationInput } from 'src/models/salles/dtos/order-by.args';

@InputType()
export class CoursOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CoursOrderByWithRelationInputStrict,
      Prisma.CoursOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  description: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateDebut: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  dateFin: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  heureDebut: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  heureFin: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  matiereId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  salleId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  classeId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  professeurId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => MatiereOrderByWithRelationInput, { nullable: true })
  matiere: MatiereOrderByWithRelationInput;

  @Field(() => SalleOrderByWithRelationInput, { nullable: true })
  salle: SalleOrderByWithRelationInput;

  @Field(() => ClasseOrderByWithRelationInput, { nullable: true })
  classe: ClasseOrderByWithRelationInput;

  @Field(() => EvaluationEtudiantsOrderByRelationAggregateInput, {
    nullable: true,
  })
  evaluationEtudiant: EvaluationEtudiantsOrderByRelationAggregateInput;

  @Field(() => FeuillePresenceOrderByRelationAggregateInput, { nullable: true })
  feuillePresences: FeuillePresenceOrderByRelationAggregateInput;

  @Field(() => ProfesseurOrderByWithRelationInput, { nullable: true })
  professeur: ProfesseurOrderByWithRelationInput;

  @Field(() => EmploiDuTempsOrderByRelationAggregateInput, { nullable: true })
  emploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}

@InputType()
export class CoursOrderByWithRelationInput extends PartialType(
  CoursOrderByWithRelationInputStrict,
) {}

@InputType()
export class CoursOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
