import { Field, ObjectType } from '@nestjs/graphql'
import { Classe as ClasseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Classe implements RestrictProperties<Classe, ClasseType> {

    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    nom: string

    @Field()
    code: string

    @Field()
    etablissementId: number

    @Field()
    specialiteId: number
}
