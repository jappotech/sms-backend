import { CreatePermissionInput } from './create-permission.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Permission } from '@prisma/client'

@InputType()
export class UpdatePermissionInput extends PartialType(CreatePermissionInput) {
  id: Permission['id']
}
