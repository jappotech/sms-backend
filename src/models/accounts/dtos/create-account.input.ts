import { InputType, PickType } from '@nestjs/graphql'
import { Account } from '../entity/account.entity'

@InputType()
export class CreateAccountInput extends PickType(Account, ['username', 'password', 'roles', 'userId'], InputType) { }

