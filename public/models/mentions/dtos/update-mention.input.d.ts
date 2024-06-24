import { CreateMentionInput } from './create-mention.input';
import { Mention } from '@prisma/client';
declare const UpdateMentionInput_base: import("@nestjs/common").Type<Partial<CreateMentionInput>>;
export declare class UpdateMentionInput extends UpdateMentionInput_base {
    id: Mention['id'];
}
export {};
