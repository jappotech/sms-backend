import { Prisma } from '@prisma/client';
export declare class BulletinNotesOrderByWithRelationInputStrict {
    etudiantId?: Prisma.SortOrder;
    uniteEnseignementId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    noteId?: Prisma.SortOrder;
    moyenne?: Prisma.SortOrder;
    resultat?: Prisma.SortOrder;
    _count?: Prisma.SortOrder;
}
declare const BulletinNotesOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<BulletinNotesOrderByWithRelationInputStrict>>;
export declare class BulletinNotesOrderByWithRelationInput extends BulletinNotesOrderByWithRelationInput_base {
    _count?: Prisma.SortOrder;
}
export declare class BulletinNotesOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
