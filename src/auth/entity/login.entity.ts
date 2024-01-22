import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Login {
  @Field()
  username: string;

  @Field()
  password: string;
}