import { ObjectType } from '@nestjs/graphql'
import { Classe as ClasseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Classe implements RestrictProperties<Classe,ClasseType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
