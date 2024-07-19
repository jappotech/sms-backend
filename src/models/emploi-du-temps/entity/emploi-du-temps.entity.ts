import { ObjectType, Field } from '@nestjs/graphql'
import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class EmploiDuTemps implements RestrictProperties<EmploiDuTemps,EmploiDuTempsType> {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  daysOfWeek: Date;

  @Field({ nullable: true })
  startTime: Date

  @Field({ nullable: true })
  endTime: Date

  @Field({ nullable: true })
  color: string

  @Field({ nullable: true })
  startRecur: Date

  @Field({ nullable: true })
  endRecur: Date
  
  @Field({ nullable: true })
  coursId: number

  @Field({ nullable: true })
  salleId: number

  @Field({ nullable: true })
  classeId: number

  @Field({ nullable: true })
  professeurId: number

}
