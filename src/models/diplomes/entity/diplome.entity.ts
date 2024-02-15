import { Field, ObjectType } from '@nestjs/graphql';
import { Diplome as DiplomeType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Diplome implements RestrictProperties<Diplome, DiplomeType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  finalite: string;

  @Field({ nullable: true })
  entite: string;

  @Field({ nullable: true })
  habilitation: string;

  @Field({ nullable: true })
  partenaires: string[];

  @Field({ nullable: true })
  dateCreation: Date;

  @Field({ nullable: true })
  dateHabilitation: Date;

  @Field({ nullable: true })
  dateEcheance: Date;

  @Field({ nullable: true })
  duree: number;

  @Field({ nullable: true })
  specialiteId: number;
}
