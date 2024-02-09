import { Module } from '@nestjs/common'
import { BulletinNotesService } from './bulletin-notes.service'
import { BulletinNotesResolver } from './bulletin-notes.resolver'

@Module({
  providers: [BulletinNotesResolver, BulletinNotesService],
  exports: [BulletinNotesService],
})
export class BulletinNotesModule {}
