import { Field, ObjectType } from '@nestjs/graphql';
import { AnneeScolaire as AnneeScolaireType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class AnneeScolaire
  implements RestrictProperties<AnneeScolaire, AnneeScolaireType>
{
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  dateDebut: number;

  @Field({ nullable: true })
  dateFin: number;

  @Field({ nullable: true })
  nom: string;
}
