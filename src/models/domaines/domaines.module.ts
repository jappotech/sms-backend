import { Module } from '@nestjs/common';
import { DomainesService } from './domaines.service';
import { DomainesResolver } from './domaines.resolver';

@Module({
  providers: [DomainesResolver, DomainesService],
  exports: [DomainesService],
})
export class DomainesModule {}
