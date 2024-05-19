import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MentionsService } from './mentions.service';
import { Mention } from './entity/mention.entity';
import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args';
import { CreateMentionInput } from './dtos/create-mention.input';
import { UpdateMentionInput } from './dtos/update-mention.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Res } from '@nestjs/common';
import { Specialite } from '../specialites/entity/specialite.entity';
import { Domaine } from '../domaines/entity/domaine.entity';

@Resolver(() => Mention)
export class MentionsResolver {
  constructor(
    private readonly mentionsService: MentionsService,
    private readonly prisma: PrismaService,
  ) { }

  // @AllowAuthenticated()
  @Mutation(() => Mention)
  createMention(
    @Args('createMentionInput') args: CreateMentionInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.mentionsService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Mention], { name: 'mentions' })
  async findAll(@Args() args: FindManyMentionArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.mentionsService.findAllByEtablissement(
        args,
        affiliation.etablissementId,
      );
    }
    return this.mentionsService.findAll(args);
  }

  @Query(() => Mention, { name: 'mention' })
  findOne(@Args() args: FindUniqueMentionArgs) {
    return this.mentionsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Mention)
  async updateMention(
    @Args('updateMentionInput') args: UpdateMentionInput,
    @GetUser() user: GetUserType,
  ) {
    const mention = await this.prisma.mention.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, mention.uid)
    return this.mentionsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Mention)
  async removeMention(
    @Args() args: FindUniqueMentionArgs,
    @GetUser() user: GetUserType,
  ) {
    const mention = await this.prisma.mention.findUnique(args);
    // checkRowLevelPermission(user, mention.uid)
    return this.mentionsService.remove(args);
  }

  @AllowAuthenticated()
  @ResolveField(() => [Specialite])
  async specialites(@Parent() parent: Mention, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    return this.prisma.specialite.findMany({
      where: {
        AND: [
          {
            mention: {
              id: parent.id,
            }
          },
          {
            etablissementId: affiliation.etablissementId
          }
        ]
      },
    });
  }

  @ResolveField(() => Domaine)
  async domaine(@Parent() parent: Mention) {
    return this.prisma.domaine.findUnique({
      where: { id: parent.domaineId },
    });
  }
}
