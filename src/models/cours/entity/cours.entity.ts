import { Field, ObjectType } from '@nestjs/graphql';
import { Cours as CoursType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Cours implements RestrictProperties<Cours, CoursType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  dateDebut: Date;

  @Field({ nullable: true })
  dateFin: Date;

  @Field({ nullable: true })
  heureDebut: Date;

  @Field({ nullable: true })
  heureFin: Date;

  @Field({ nullable: true })
  matiereId: number;

  @Field({ nullable: true })
  salleId: number;

  @Field({ nullable: true })
  classeId: number;

  @Field({ nullable: true })
  professeurId: number;
}
