import { ObjectType } from '@nestjs/graphql'
import { Salle as SalleType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Salle implements RestrictProperties<Salle,SalleType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
