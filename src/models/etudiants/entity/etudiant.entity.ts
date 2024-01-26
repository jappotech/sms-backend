import { Field, ObjectType } from '@nestjs/graphql'
import { Etudiant as EtudiantType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Etudiant implements RestrictProperties<Etudiant, EtudiantType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    slug: string

    @Field({ nullable: true })
    ine: string

    @Field({ nullable: true })
    baccaleaureat: string

    @Field({ nullable: true })
    anneeBaccaleaureat: number

    @Field({ nullable: true })
    profileId: number

    @Field({ nullable: true })
    feuillePresencesId: number
}
