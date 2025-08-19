import { InputType, PickType } from '@nestjs/graphql'
import { EmploiDuTemps } from '../entity/emploi-du-temps.entity'

@InputType()
export class CreateEmploiDuTempsInput extends PickType(
  EmploiDuTemps,
  [
    'title',
    'daysOfWeek',
    'startTime',
    'endTime',
    'color',
    'startRecur',
    'endRecur',
    'coursId',
    'classeId',
    'professeurId',
    'salleId',
  ],
  InputType
) {}







