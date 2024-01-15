import { InputType, PickType } from '@nestjs/graphql'
import { EmploiDuTemps } from '../entity/emploi-du-temps.entity'

@InputType()
export class CreateEmploiDuTempsInput extends PickType(EmploiDuTemps,[],InputType) {}

