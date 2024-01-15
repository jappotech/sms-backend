import { ObjectType } from '@nestjs/graphql'
import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EmploiDuTemps implements RestrictProperties<EmploiDuTemps,EmploiDuTempsType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
