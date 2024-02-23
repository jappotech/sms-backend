import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BulletinNotesService } from './bulletin-notes.service';
import { BulletinNotes } from './entity/bulletin-notes.entity';
import {
  FindUniqueBulletinNotesArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Resolver(() => BulletinNotes)
export class BulletinNotesResolver {
  constructor(
    private readonly bulletinNotesService: BulletinNotesService,
    private readonly prisma: PrismaService,
  ) { }

  @Query(() => BulletinNotes, { name: 'bulletinNotes' })
  findOne(@Args() args: FindUniqueBulletinNotesArgs) {
    return this.bulletinNotesService.findOne(args);
  }

}
