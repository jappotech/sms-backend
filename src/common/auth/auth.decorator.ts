import {
  SetMetadata,
  UseGuards,
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';


import { AuthGuard } from './auth.guard';
import { GqlExecutionContext } from '@nestjs/graphql';

export const AllowAuthenticated = (...roles: string[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard));

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const context = GqlExecutionContext.create(ctx);
  return context.getContext().req.user;
});
