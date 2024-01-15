import { Module } from '@nestjs/common'
import { AdressesService } from './adresses.service'
import { AdressesResolver } from './adresses.resolver'

@Module({
  providers: [AdressesResolver, AdressesService],
  exports: [AdressesService],
})
export class AdressesModule {}
