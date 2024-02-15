import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';

@Module({
  providers: [ContactsResolver, ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
