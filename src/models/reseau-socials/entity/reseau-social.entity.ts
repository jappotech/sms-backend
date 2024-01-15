import { ObjectType } from '@nestjs/graphql'
import { ReseauSocial as ReseauSocialType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class ReseauSocial implements RestrictProperties<ReseauSocial,ReseauSocialType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
