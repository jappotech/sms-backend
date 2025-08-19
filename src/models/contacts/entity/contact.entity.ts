import { Field, ObjectType } from '@nestjs/graphql';
import { Contact as ContactType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Contact implements RestrictProperties<Contact, ContactType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: false })
  telephone: string;

  @Field({ nullable: true })
  fix: string;

  @Field({ nullable: true })
  fax: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  siteWeb: string;
}
