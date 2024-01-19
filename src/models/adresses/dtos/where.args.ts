import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args'
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args'

@InputType()
export class AdresseWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class AdresseWhereInputStrict implements RestrictProperties<AdresseWhereInputStrict, Prisma.AdresseWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => StringFilter, { nullable: true })
  pays: StringFilter

  @Field(() => StringFilter, { nullable: true })
  region: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ville: StringFilter

  @Field(() => StringFilter, { nullable: true })
  codePostal: StringFilter

  @Field(() => StringFilter, { nullable: true })
  geolocalisation: StringFilter

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter

  @Field(() => [AdresseWhereInputStrict], { nullable: true })
  AND: AdresseWhereInputStrict[]

  @Field(() => [AdresseWhereInputStrict], { nullable: true })
  OR: AdresseWhereInputStrict[]

  @Field(() => [AdresseWhereInputStrict], { nullable: true })
  NOT: AdresseWhereInputStrict[]
}

@InputType()
export class AdresseWhereInput extends PartialType(
  AdresseWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => StringFilter, { nullable: true })
  pays: StringFilter

  @Field(() => StringFilter, { nullable: true })
  region: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ville: StringFilter

  @Field(() => StringFilter, { nullable: true })
  codePostal: StringFilter

  @Field(() => StringFilter, { nullable: true })
  geolocalisation: StringFilter

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter

  @Field(() => [AdresseWhereInput], { nullable: true })
  AND: AdresseWhereInput[]

  @Field(() => [AdresseWhereInput], { nullable: true })
  OR: AdresseWhereInput[]

  @Field(() => [AdresseWhereInput], { nullable: true })
  NOT: AdresseWhereInput[]
}

@InputType()
export class AdresseListRelationFilter {

  @Field(() => [AdresseWhereInput], { nullable: true })
  every?: AdresseWhereInput

  @Field(() => [AdresseWhereInput], { nullable: true })
  some?: AdresseWhereInput

  @Field(() => [AdresseWhereInput], { nullable: true })
  none?: AdresseWhereInput
}

@InputType()
export class AdresseRelationFilter {

  @Field(() => [AdresseWhereInput], { nullable: true })
  is?: AdresseWhereInput

  @Field(() => [AdresseWhereInput], { nullable: true })
  isNot?: AdresseWhereInput
}
