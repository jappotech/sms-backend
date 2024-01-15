import { ObjectType } from '@nestjs/graphql'
import { NoteEtudiant as NoteEtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class NoteEtudiant implements RestrictProperties<NoteEtudiant,NoteEtudiantType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
