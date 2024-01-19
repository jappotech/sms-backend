import { Field, ObjectType } from '@nestjs/graphql'
import { UniteEnseignement as UniteEnseignementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class UniteEnseignement implements RestrictProperties<UniteEnseignement, UniteEnseignementType> {

    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    code: string

    @Field()
    nom: string

    @Field()
    credit: number

    @Field({ nullable: true })
    semestreId: number
}
