import { Domaine } from '../entity/domaine.entity';
import { CreateMentionInput } from 'src/models/mentions/dtos/create-mention.input';
export declare class CreateDomaineWithMentionsInput extends Domaine {
    mentions: CreateMentionInput[];
}
declare const CreateDomaineInput_base: import("@nestjs/common").Type<Pick<CreateDomaineWithMentionsInput, "nom" | "mentions">>;
export declare class CreateDomaineInput extends CreateDomaineInput_base {
}
declare const CreateDomaineInputWithId_base: import("@nestjs/common").Type<Pick<CreateDomaineWithMentionsInput, "id" | "nom">>;
export declare class CreateDomaineInputWithId extends CreateDomaineInputWithId_base {
}
export {};
