import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Utilisateur as UtilisateurType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Utilisateur
  implements RestrictProperties<Utilisateur, UtilisateurType>
{
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  matricule: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  prenom: string;

  @Field({ nullable: true })
  nom: string;

  @Field({ nullable: true })
  dateNaissance: Date;

  @Field({ nullable: true })
  lieuNaissance: string;

  @Field({ nullable: true })
  cni: string;

  @Field(() => String, { nullable: true })
  genre: $Enums.Genre | null;

  @Field({ nullable: true })
  nationalite: string;

  @Field((type) => String, { nullable: true })
  groupeSanguin: $Enums.GroupeSanguin;

  @Field({ nullable: true })
  etablissementId: number;

  @Field({ nullable: true })
  statutCompte: string;

  @Field((type) => [String])
  roles: $Enums.Role[];

  @Field({ nullable: true })
  contactId: number;

  @Field({ nullable: true })
  accountId: number;

  @Field({ nullable: true })
  adresseId: number;
}
