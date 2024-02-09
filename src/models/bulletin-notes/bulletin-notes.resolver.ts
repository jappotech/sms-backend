import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BulletinNotesService } from './bulletin-notes.service'
import { BulletinNotes } from './entity/bulletin-notes.entity'
import { FindManyBulletinNotesArgs, FindUniqueBulletinNotesArgs } from './dtos/find.args'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => BulletinNotes)
export class BulletinNotesResolver {
  constructor(private readonly bulletinNotesService: BulletinNotesService,
    private readonly prisma: PrismaService) { }

  /* @Query(() => [BulletinNotes], { name: 'all_bulletinNotes' })
  findAll(@Args() args: FindManyBulletinNotesArgs) {
    console.log("🚀  ~ findAll ~ args:", args)
    return this.bulletinNotesService.findAll(args)
  } */

  @Query(() => BulletinNotes, { name: 'bulletinNotes' })
  findOne(@Args() args: FindUniqueBulletinNotesArgs) {
    console.log("🚀  ~ findOne ~ args:", args)
    return this.bulletinNotesService.findOne(args)
  }

}
