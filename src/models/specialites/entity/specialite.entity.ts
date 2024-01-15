import { ObjectType } from '@nestjs/graphql'
import { Specialite as SpecialiteType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Specialite implements RestrictProperties<Specialite,SpecialiteType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
