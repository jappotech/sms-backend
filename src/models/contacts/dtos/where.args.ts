import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ContactWhereUniqueInput {
  id: number
}

@InputType()
export class ContactWhereInputStrict implements RestrictProperties<ContactWhereInputStrict, Prisma.ContactWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ContactWhereInput[]
  OR: ContactWhereInput[]
  NOT: ContactWhereInput[]
}

@InputType()
export class ContactWhereInput extends PartialType(
  ContactWhereInputStrict,
) {}

@InputType()
export class ContactListRelationFilter {
  every?: ContactWhereInput
  some?: ContactWhereInput
  none?: ContactWhereInput
}

@InputType()
export class ContactRelationFilter {
  is?: ContactWhereInput
  isNot?: ContactWhereInput
}
