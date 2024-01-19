import { InputType, PickType } from '@nestjs/graphql'
import { Utilisateur } from '../entity/utilisateur.entity'

@InputType()
export class CreateUtilisateurInput extends PickType(
  Utilisateur,
  [
    'adresseId', 'nationalite', 'nom', 'prenom', 'roles', 'statutCompte', 'cni',
    'contactId', 'dateNaissance', 'etablissementId', 'genre', 'nom', 'groupeSanguin', 'lieuNaissance', 'matricule'
  ],
  InputType
) { }

