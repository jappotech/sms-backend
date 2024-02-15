import { Field, ObjectType } from '@nestjs/graphql';
import { Mention as MentionType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Mention implements RestrictProperties<Mention, MentionType> {
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
  domaineId: number;
}
