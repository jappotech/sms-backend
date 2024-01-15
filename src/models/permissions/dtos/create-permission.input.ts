import { InputType, PickType } from '@nestjs/graphql'
import { Permission } from '../entity/permission.entity'

@InputType()
export class CreatePermissionInput extends PickType(Permission,[],InputType) {}

