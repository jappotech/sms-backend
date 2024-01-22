import { Module } from '@nestjs/common'
import { MentionsService } from './mentions.service'
import { MentionsResolver } from './mentions.resolver'

@Module({
  providers: [MentionsResolver, MentionsService],
  exports: [MentionsService],
})
export class MentionsModule {}
