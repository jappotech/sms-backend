import { Field, ObjectType } from '@nestjs/graphql'
import { FeuillePresence as FeuillePresenceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class FeuillePresence implements RestrictProperties<FeuillePresence, FeuillePresenceType> {
    @Field()
    id: number

    @Field()
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field()
    date: Date

    @Field()
    heureDebut: Date

    @Field()
    heureFin: Date

    @Field()
    coursId: number

    @Field()
    etudiantId: number
}
