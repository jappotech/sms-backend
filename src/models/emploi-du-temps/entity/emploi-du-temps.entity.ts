import { Field, ObjectType } from '@nestjs/graphql';
import { EmploiDuTemps as EmploiDuTempsType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class EmploiDuTemps
  implements RestrictProperties<EmploiDuTemps, EmploiDuTempsType>
{
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  coursId: number;

  @Field({ nullable: true })
  classeId: number;

  @Field({ nullable: true })
  professeurId: number;

  @Field({ nullable: true })
  salleId: number;

  @Field({ nullable: true })
  dateDebut: Date;

  @Field({ nullable: true })
  dateFin: Date;
}
