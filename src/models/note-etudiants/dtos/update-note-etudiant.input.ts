import { CreateNoteEtudiantInput } from './create-note-etudiant.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { NoteEtudiant } from '@prisma/client'

@InputType()
export class UpdateNoteEtudiantInput extends PartialType(CreateNoteEtudiantInput) {
  id: NoteEtudiant['id']
}
