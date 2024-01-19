import { InputType, PickType } from '@nestjs/graphql'
import { Contact } from '../entity/contact.entity'

@InputType()
export class CreateContactInput extends PickType(Contact, ['email', 'fax', 'fix', 'siteWeb', 'telephone'], InputType) { }

