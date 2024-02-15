import { Field, ObjectType } from '@nestjs/graphql';
import { Specialite as SpecialiteType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Specialite
  implements RestrictProperties<Specialite, SpecialiteType>
{
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  mentionId: number;
}
