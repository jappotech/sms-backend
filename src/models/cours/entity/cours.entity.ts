import { ObjectType } from '@nestjs/graphql'
import { Cours as CoursType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Cours implements RestrictProperties<Cours,CoursType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
