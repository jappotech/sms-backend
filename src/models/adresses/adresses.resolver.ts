import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdressesService } from './adresses.service';
import { Adresse } from './entity/adresse.entity';
import { FindManyAdresseArgs, FindUniqueAdresseArgs } from './dtos/find.args';
import { CreateAdresseInput } from './dtos/create-adresse.input';
import { UpdateAdresseInput } from './dtos/update-adresse.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Adresse)
export class AdressesResolver {
  constructor(
    private readonly adressesService: AdressesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Adresse)
  createAdresse(
    @Args('createAdresseInput') args: CreateAdresseInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.adressesService.create(args);
  }

  @Query(() => [Adresse], { name: 'adresses' })
  findAll(@Args() args: FindManyAdresseArgs) {
    return this.adressesService.findAll(args);
  }

  @Query(() => Adresse, { name: 'adresse' })
  findOne(@Args() args: FindUniqueAdresseArgs) {
    return this.adressesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Adresse)
  async updateAdresse(
    @Args('updateAdresseInput') args: UpdateAdresseInput,
    @GetUser() user: GetUserType,
  ) {
    const adresse = await this.prisma.adresse.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, adresse.uid)
    return this.adressesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Adresse)
  async removeAdresse(
    @Args() args: FindUniqueAdresseArgs,
    @GetUser() user: GetUserType,
  ) {
    const adresse = await this.prisma.adresse.findUnique(args);
    // checkRowLevelPermission(user, adresse.uid)
    return this.adressesService.remove(args);
  }
}
