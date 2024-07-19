import { ObjectType, Field } from '@nestjs/graphql'
import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EmploiDuTemps implements RestrictProperties<EmploiDuTemps, EmploiDuTempsType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  daysOfWeek: string[];

  @Field({ nullable: true })
  startTime: string

  @Field({ nullable: true })
  endTime: string

  @Field({ nullable: true })
  color: string

  @Field({ nullable: true })
  startRecur: string

  @Field({ nullable: true })
  endRecur: string

  @Field({ nullable: true })
  coursId: number

  @Field({ nullable: true })
  salleId: number

  @Field({ nullable: true })
  classeId: number

  @Field({ nullable: true })
  professeurId: number

}
