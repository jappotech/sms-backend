import { Field, ObjectType } from '@nestjs/graphql';
import { Salle as SalleType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Salle implements RestrictProperties<Salle, SalleType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  capacite: number;

  @Field({ nullable: true })
  batiment: string;

  @Field({ nullable: true })
  etablissementId: number;

  @Field({ nullable: true })
  estDisponible: boolean;
}
