import { Module } from '@nestjs/common';
import { PaiementsService } from './paiements.service';
import { PaiementsResolver } from './paiements.resolver';

@Module({
  providers: [PaiementsResolver, PaiementsService],
  exports: [PaiementsService],
})
export class PaiementsModule {}
