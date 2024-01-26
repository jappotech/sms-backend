import { Field, ObjectType } from '@nestjs/graphql'
import { FeuillePresence as FeuillePresenceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class FeuillePresence implements RestrictProperties<FeuillePresence, FeuillePresenceType> {
    @Field({ nullable: true })
    id: number

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date

    @Field({ nullable: true })
    date: Date

    @Field({ nullable: true })
    heureDebut: Date

    @Field({ nullable: true })
    heureFin: Date

    @Field({ nullable: true })
    coursId: number

    @Field({ nullable: true })
    etudiantId: number
}
