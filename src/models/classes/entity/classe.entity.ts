import { Field, ObjectType } from '@nestjs/graphql';
import { Classe as ClasseType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { UniteEnseignement } from '../../unite-enseignements/entity/unite-enseignement.entity';

@ObjectType()
export class Classe implements RestrictProperties<Omit<Classe, 'uniteEnseignements'>, ClasseType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  niveau: string;

  @Field({ nullable: true })
  etablissementId: number;

  @Field({ nullable: true })
  specialiteId: number;

  @Field({ nullable: true })
  anneeScolaireId: number;

  @Field(() => [UniteEnseignement], { nullable: true })
  uniteEnseignements?: UniteEnseignement[];
}
