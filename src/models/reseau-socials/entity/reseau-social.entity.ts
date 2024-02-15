import { Field, ObjectType } from '@nestjs/graphql';
import { ReseauSocial as ReseauSocialType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class ReseauSocial
  implements RestrictProperties<ReseauSocial, ReseauSocialType>
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
  username: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  contactId: number;
}
