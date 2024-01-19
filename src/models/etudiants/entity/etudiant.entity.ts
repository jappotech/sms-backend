import { Field, ObjectType } from '@nestjs/graphql'
import { Etudiant as EtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Etudiant implements RestrictProperties<Etudiant, EtudiantType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    slug: string

    @Field()
    ine: string

    @Field({ nullable: true })
    baccaleaureat: string

    @Field({ nullable: true })
    anneeBaccaleaureat: number

    @Field()
    profileId: number

    @Field({ nullable: true })
    feuillePresencesId: number
}
