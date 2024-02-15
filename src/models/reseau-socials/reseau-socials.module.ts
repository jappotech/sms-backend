import { Module } from '@nestjs/common';
import { ReseauSocialsService } from './reseau-socials.service';
import { ReseauSocialsResolver } from './reseau-socials.resolver';

@Module({
  providers: [ReseauSocialsResolver, ReseauSocialsService],
  exports: [ReseauSocialsService],
})
export class ReseauSocialsModule {}
