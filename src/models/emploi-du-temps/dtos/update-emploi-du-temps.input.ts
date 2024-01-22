import { CreateEmploiDuTempsInput } from './create-emploi-du-temps.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { EmploiDuTemps } from '@prisma/client'

@InputType()
export class UpdateEmploiDuTempsInput extends PartialType(CreateEmploiDuTempsInput) {
  id: EmploiDuTemps['id']
}
