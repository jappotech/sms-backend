import { Module } from '@nestjs/common'
import { NoteEtudiantsService } from './note-etudiants.service'
import { NoteEtudiantsResolver } from './note-etudiants.resolver'

@Module({
  providers: [NoteEtudiantsResolver, NoteEtudiantsService],
  exports: [NoteEtudiantsService],
})
export class NoteEtudiantsModule {}
