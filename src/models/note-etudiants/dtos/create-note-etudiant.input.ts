import { InputType, PickType } from '@nestjs/graphql'
import { NoteEtudiant } from '../entity/note-etudiant.entity'

@InputType()
export class CreateNoteEtudiantInput extends PickType(NoteEtudiant, ['etudiantId', 'evaluationEtudiantId', 'note'], InputType) { }

