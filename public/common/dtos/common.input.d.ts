import { Prisma } from '@prisma/client';
export type RestrictProperties<T, U> = {
    [K in keyof T]: K extends keyof U ? T[K] : never;
} & Required<U>;
export declare class DateTimeFilter {
    equals?: string | Date;
    in?: string[] | Date[];
    notIn?: string[] | Date[];
    lt?: string | Date;
    lte?: string | Date;
    gt?: string | Date;
    gte?: string | Date;
}
export declare class StringFilter {
    equals?: string;
    in?: string[];
    notIn?: string[];
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: string;
    mode?: Prisma.QueryMode;
}
export declare class StringListFilter {
    equals: string[];
    has: string;
    hasEvery: string[];
    hasSome: string[];
    isEmpty: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: boolean;
}
export declare class IntFilter {
    equals?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
}
export declare class FloatFilter {
    equals?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: number;
}
export declare class WhereUniqueInputNumber {
    id: number;
}
export declare class WhereUniqueInputString {
    id?: string;
}
export declare class WhereUniqueInputUid {
    uid: string;
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare class AggregateCountOutput {
    count: number;
}
export declare class LocationFilterInput {
    ne_lat: number;
    ne_lng: number;
    sw_lat: number;
    sw_lng: number;
}
export declare class PaginationInput {
    take: number;
    skip: number;
}
