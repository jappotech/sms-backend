import { ObjectType } from '@nestjs/graphql'
import { Semestre as SemestreType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Semestre implements RestrictProperties<Semestre,SemestreType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
