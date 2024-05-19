import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { Contact } from './entity/contact.entity';
import { FindManyContactArgs, FindUniqueContactArgs } from './dtos/find.args';
import { CreateContactInput } from './dtos/create-contact.input';
import { UpdateContactInput } from './dtos/update-contact.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(
    private readonly contactsService: ContactsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Contact)
  createContact(
    @Args('createContactInput') args: CreateContactInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.contactsService.create(args);
  }

  @Query(() => [Contact], { name: 'contacts' })
  findAll(@Args() args: FindManyContactArgs) {
    return this.contactsService.findAll(args);
  }

  @Query(() => Contact, { name: 'contact' })
  findOne(@Args() args: FindUniqueContactArgs) {
    return this.contactsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Contact)
  async updateContact(
    @Args('updateContactInput') args: UpdateContactInput,
    @GetUser() user: GetUserType,
  ) {
    const contact = await this.prisma.contact.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, contact.uid)
    return this.contactsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Contact)
  async removeContact(
    @Args() args: FindUniqueContactArgs,
    @GetUser() user: GetUserType,
  ) {
    const contact = await this.prisma.contact.findUnique(args);
    // checkRowLevelPermission(user, contact.uid)
    return this.contactsService.remove(args);
  }
}
