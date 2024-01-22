import { InputType, PickType } from "@nestjs/graphql";
import { Login } from "../entity/login.entity";

@InputType()
export class LoginInput extends PickType(
  Login,
  ['username', 'password'],
  InputType
) { }