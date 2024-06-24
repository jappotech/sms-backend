export declare class BulletinNotesWhereUniqueInput {
    etudiantId: number;
    semestreId: number;
    classeId: number;
}
export declare class BulletinNotesAnnuelWhereUniqueInput {
    etudiantId: number;
    classeId: number;
}
export declare class BulletinNotesWhereInputStrict {
    AND: BulletinNotesWhereInputStrict[];
    OR: BulletinNotesWhereInputStrict[];
    NOT: BulletinNotesWhereInputStrict[];
}
declare const BulletinNotesWhereInput_base: import("@nestjs/common").Type<Partial<BulletinNotesWhereInputStrict>>;
export declare class BulletinNotesWhereInput extends BulletinNotesWhereInput_base {
    classeId?: number;
    AND: BulletinNotesWhereInput[];
    OR: BulletinNotesWhereInput[];
    NOT: BulletinNotesWhereInput[];
}
export declare class BulletinNotesListRelationFilter {
    every?: BulletinNotesWhereInput;
    some?: BulletinNotesWhereInput;
    none?: BulletinNotesWhereInput;
}
export declare class BulletinNotesRelationFilter {
    is?: BulletinNotesWhereInput;
    isNot?: BulletinNotesWhereInput;
}
export {};
