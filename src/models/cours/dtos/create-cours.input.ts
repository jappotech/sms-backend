import { InputType, PickType } from '@nestjs/graphql'
import { Cours } from '../entity/cours.entity'

@InputType()
export class CreateCoursInput extends PickType(Cours,[],InputType) {}

