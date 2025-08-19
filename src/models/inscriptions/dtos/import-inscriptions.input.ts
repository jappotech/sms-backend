import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload-minimal';

// Interface pour le type Upload
interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
}

@InputType()
export class ImportInscriptionsInput {
  @Field(() => GraphQLUpload, {
    description: 'Fichier Excel ou CSV contenant les inscriptions',
  })
  file: Promise<FileUpload>;

  @Field(() => String, {
    description: 'ID de la classe où les étudiants seront inscrits',
  })
  classeId: string;

  @Field(() => String, {
    nullable: true,
    description: 'Type de paiement par défaut',
  })
  typePaiement?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Statut par défaut des inscriptions',
  })
  statut?: string;

  @Field(() => String, {
    nullable: true,
    description:
      'Nom de la feuille Excel à utiliser. Si non spécifié, la première feuille sera utilisée.',
  })
  sheetName?: string;
}
