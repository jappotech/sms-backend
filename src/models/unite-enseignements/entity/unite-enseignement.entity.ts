import { ObjectType } from '@nestjs/graphql'
import { UniteEnseignement as UniteEnseignementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class UniteEnseignement implements RestrictProperties<UniteEnseignement,UniteEnseignementType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
