import { Module } from '@nestjs/common'
import { MatieresService } from './matieres.service'
import { MatieresResolver } from './matieres.resolver'

@Module({
  providers: [MatieresResolver, MatieresService],
  exports: [MatieresService],
})
export class MatieresModule {}
