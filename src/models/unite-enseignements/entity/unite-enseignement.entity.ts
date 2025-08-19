import { Field, ObjectType } from '@nestjs/graphql';
import { UniteEnseignement as UniteEnseignementType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { Semestre } from '../../semestres/entity/semestre.entity';
import { Matiere } from '../../matieres/entity/matiere.entity';

@ObjectType()
export class UniteEnseignement
  implements RestrictProperties<Omit<UniteEnseignement, 'semestre' | 'matieres'>, UniteEnseignementType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  credit: number;

  @Field({ nullable: true })
  numero: number;

  @Field({ nullable: true })
  semestreId: number;

  @Field({ nullable: true })
  classeId: number;

  @Field(() => Semestre, { nullable: true })
  semestre?: Semestre;

  @Field(() => [Matiere], { nullable: true })
  matieres?: Matiere[];
}
