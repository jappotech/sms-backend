import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { AnneeScolaireRelationFilter } from 'src/models/annee-scolaires/dtos/where.args';
import { AnneeScolaire } from 'src/models/annee-scolaires/entity/annee-scolaire.entity';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { EvaluationEtudiantsListRelationFilter } from 'src/models/evaluation-etudiants/dtos/where.args';
import { FeuillePresenceListRelationFilter } from 'src/models/feuille-presences/dtos/where.args';
import { MatiereRelationFilter } from 'src/models/matieres/dtos/where.args';
import { NoteEtudiantListRelationFilter } from 'src/models/note-etudiants/dtos/where.args';
import { ProfesseurRelationFilter } from 'src/models/professeurs/dtos/where.args';
import { SalleRelationFilter } from 'src/models/salles/dtos/where.args';

@InputType()
export class CoursWhereUniqueInput {
  id: number;
}

@InputType()
export class CoursWhereInputStrict
  implements RestrictProperties<CoursWhereInputStrict, Prisma.CoursWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateFin: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  matiereId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  salleId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  professeurId: IntFilter;

  @Field(() => MatiereRelationFilter, { nullable: true })
  matiere: MatiereRelationFilter;

  @Field(() => SalleRelationFilter, { nullable: true })
  salle: SalleRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => EvaluationEtudiantsListRelationFilter, { nullable: true })
  evaluationEtudiant: EvaluationEtudiantsListRelationFilter;

  @Field(() => FeuillePresenceListRelationFilter, { nullable: true })
  feuillePresences: FeuillePresenceListRelationFilter;

  @Field(() => ProfesseurRelationFilter, { nullable: true })
  professeur: ProfesseurRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  emploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [CoursWhereInputStrict], { nullable: true })
  AND: CoursWhereInputStrict[];

  @Field(() => [CoursWhereInputStrict], { nullable: true })
  OR: CoursWhereInputStrict[];

  @Field(() => [CoursWhereInputStrict], { nullable: true })
  NOT: CoursWhereInputStrict[];
}

@InputType()
export class CoursWhereInput extends PartialType(CoursWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateFin: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  matiereId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  salleId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  professeurId: IntFilter;

  @Field(() => MatiereRelationFilter, { nullable: true })
  matiere: MatiereRelationFilter;

  @Field(() => SalleRelationFilter, { nullable: true })
  salle: SalleRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => EvaluationEtudiantsListRelationFilter, { nullable: true })
  evaluationEtudiant: EvaluationEtudiantsListRelationFilter;

  @Field(() => FeuillePresenceListRelationFilter, { nullable: true })
  feuillePresences: FeuillePresenceListRelationFilter;

  @Field(() => ProfesseurRelationFilter, { nullable: true })
  professeur: ProfesseurRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  emploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  anneeScolaireId: IntFilter;

  @Field(() => AnneeScolaireRelationFilter, { nullable: true })
  AnneeScolaire: AnneeScolaireRelationFilter;

  @Field(() => [CoursWhereInput], { nullable: true })
  AND: CoursWhereInput[];

  @Field(() => [CoursWhereInput], { nullable: true })
  OR: CoursWhereInput[];

  @Field(() => [CoursWhereInput], { nullable: true })
  NOT: CoursWhereInput[];
}

@InputType()
export class CoursListRelationFilter {
  every?: CoursWhereInput;
  some?: CoursWhereInput;
  none?: CoursWhereInput;
}

@InputType()
export class CoursRelationFilter {
  is?: CoursWhereInput;
  isNot?: CoursWhereInput;
}
