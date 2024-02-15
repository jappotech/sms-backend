import { Field, ObjectType } from '@nestjs/graphql';
import { Adresse as AdresseType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Adresse implements RestrictProperties<Adresse, AdresseType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  pays: string;

  @Field({ nullable: true })
  region: string;

  @Field({ nullable: true })
  ville: string;

  @Field({ nullable: true })
  codePostal: string;

  @Field({ nullable: true })
  geolocalisation: string;
}
