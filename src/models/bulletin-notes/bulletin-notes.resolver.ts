import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BulletinNotesService } from './bulletin-notes.service';
import { BulletinNotes, ResultatAnnuel } from './entity/bulletin-notes.entity';
import {
  FindUniqueBulletinNotesAnnuelArgs,
  FindUniqueBulletinNotesArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Resolver(() => BulletinNotes)
export class BulletinNotesResolver {
  constructor(
    private readonly bulletinNotesService: BulletinNotesService,
    private readonly prisma: PrismaService,
  ) { }

  @Query(() => BulletinNotes, { name: 'bulletinNotesSemestre' })
  semestriel(@Args() args: FindUniqueBulletinNotesArgs) {
    return this.bulletinNotesService.bulletinSemestre(args);
  }

  @Query(() => [BulletinNotes], { name: 'bulletinNotesAnnuel' })
  annuel(@Args() args: FindUniqueBulletinNotesAnnuelArgs) {
    return this.bulletinNotesService.bulletinAnnuel(args);
  }

  @Query(() => ResultatAnnuel, { name: 'bulletinNotesValidationAnnee' })
  validationAnneeScolaire(@Args() args: FindUniqueBulletinNotesAnnuelArgs) {
    return this.bulletinNotesService.resultatAnnuel(args);
  }

  @Query(() => String, { name: 'bulletinNotesValidationSemestre' })
  validationSemestre(@Args() args: FindUniqueBulletinNotesArgs) {
    return this.bulletinNotesService.resultatSemestre(args);
  }

  @Query(() => [BulletinNotes], { name: 'generateRandomNotes' })
  generateRandomNotes(@Args() args: FindUniqueBulletinNotesArgs) {
    return this.bulletinNotesService.generateRandomNotes(args);
  }
}
