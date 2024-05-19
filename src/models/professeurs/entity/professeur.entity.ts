import { Field, ObjectType } from '@nestjs/graphql';
import { Professeur as ProfesseurType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Professeur
  implements RestrictProperties<Professeur, ProfesseurType>
{
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  profileId: number;
}
