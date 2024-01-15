import { InputType, PickType } from '@nestjs/graphql'
import { Diplome } from '../entity/diplome.entity'

@InputType()
export class CreateDiplomeInput extends PickType(Diplome,[],InputType) {}

