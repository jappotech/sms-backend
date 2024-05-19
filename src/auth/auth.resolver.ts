import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dtos/login.input';
import { Login } from './entity/login.entity';
import { LoginResponse } from './dtos/loginResponse';

@Resolver(() => Login)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  login(@Args('loginInput') args: LoginInput) {
    return this.authService.login(args);
  }
}
