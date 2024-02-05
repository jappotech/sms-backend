import { Field, ObjectType } from '@nestjs/graphql'
import { AnneeScolaire as AnneeScolaireType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { Classe } from 'src/models/classes/entity/classe.entity';

@ObjectType()
export class AnneeScolaire implements RestrictProperties<AnneeScolaire, AnneeScolaireType> {
    @Field({ defaultValue: "2023/2024" })
    nom: string;
}
