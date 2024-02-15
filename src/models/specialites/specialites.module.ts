import { Module } from '@nestjs/common';
import { SpecialitesService } from './specialites.service';
import { SpecialitesResolver } from './specialites.resolver';

@Module({
  providers: [SpecialitesResolver, SpecialitesService],
  exports: [SpecialitesService],
})
export class SpecialitesModule {}
