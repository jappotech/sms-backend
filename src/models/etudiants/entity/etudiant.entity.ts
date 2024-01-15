import { ObjectType } from '@nestjs/graphql'
import { Etudiant as EtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Etudiant implements RestrictProperties<Etudiant,EtudiantType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
