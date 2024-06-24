import { Mention } from '../entity/mention.entity';
import { CreateSpecialiteInput } from 'src/models/specialites/dtos/create-specialite.input';
export declare class CreateMentionWithSpecialitesInput extends Mention {
    specialites: CreateSpecialiteInput[];
}
declare const CreateMentionInput_base: import("@nestjs/common").Type<Pick<CreateMentionWithSpecialitesInput, "nom" | "domaineId" | "specialites">>;
export declare class CreateMentionInput extends CreateMentionInput_base {
}
export {};
