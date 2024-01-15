import { ObjectType } from '@nestjs/graphql'
import { Etablissement as EtablissementType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Etablissement implements RestrictProperties<Etablissement,EtablissementType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
