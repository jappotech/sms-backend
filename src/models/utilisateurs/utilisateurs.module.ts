import { Module } from '@nestjs/common'
import { UtilisateursService } from './utilisateurs.service'
import { UtilisateursResolver } from './utilisateurs.resolver'

@Module({
  providers: [UtilisateursResolver, UtilisateursService],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
