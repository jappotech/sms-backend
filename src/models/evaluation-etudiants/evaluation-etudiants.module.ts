import { Module } from '@nestjs/common';
import { EvaluationEtudiantsService } from './evaluation-etudiants.service';
import { EvaluationEtudiantsResolver } from './evaluation-etudiants.resolver';

@Module({
  providers: [EvaluationEtudiantsResolver, EvaluationEtudiantsService],
  exports: [EvaluationEtudiantsService],
})
export class EvaluationEtudiantsModule {}
