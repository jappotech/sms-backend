import { InputType, PickType } from '@nestjs/graphql'
import { Semestre } from '../entity/semestre.entity'

@InputType()
export class CreateSemestreInput extends PickType(Semestre,[],InputType) {}

