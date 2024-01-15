import { ObjectType } from '@nestjs/graphql'
import { Matiere as MatiereType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Matiere implements RestrictProperties<Matiere,MatiereType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
