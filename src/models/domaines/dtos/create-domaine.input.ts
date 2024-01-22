import { InputType, PickType } from '@nestjs/graphql'
import { Domaine } from '../entity/domaine.entity'

@InputType()
export class CreateDomaineInput extends PickType(Domaine, ['nom'], InputType) { }

