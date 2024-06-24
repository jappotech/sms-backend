import { BulletinNotesOrderByWithRelationInput } from './order-by.args';
import { BulletinNotesAnnuelWhereUniqueInput, BulletinNotesWhereInput, BulletinNotesWhereUniqueInput } from './where.args';
declare class FindManyBulletinNotesArgsStrict {
    where: BulletinNotesWhereInput;
    orderBy: BulletinNotesOrderByWithRelationInput[];
    cursor: BulletinNotesWhereUniqueInput;
    take: number;
    skip: number;
}
declare const FindManyBulletinNotesArgs_base: import("@nestjs/common").Type<Partial<FindManyBulletinNotesArgsStrict>>;
export declare class FindManyBulletinNotesArgs extends FindManyBulletinNotesArgs_base {
}
export declare class FindUniqueBulletinNotesArgs {
    where: BulletinNotesWhereUniqueInput;
}
export declare class FindUniqueBulletinNotesAnnuelArgs {
    where: BulletinNotesAnnuelWhereUniqueInput;
}
export {};
