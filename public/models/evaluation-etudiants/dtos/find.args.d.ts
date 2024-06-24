import { Prisma } from '@prisma/client';
import { EvaluationEtudiantsOrderByWithRelationInput } from './order-by.args';
import { EvaluationEtudiantsWhereInput, EvaluationEtudiantsWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyEvaluationEtudiantsArgsStrict implements RestrictProperties<FindManyEvaluationEtudiantsArgsStrict, Omit<Prisma.EvaluationEtudiantsFindManyArgs, 'include' | 'select'>> {
    where: EvaluationEtudiantsWhereInput;
    orderBy: EvaluationEtudiantsOrderByWithRelationInput[];
    cursor: EvaluationEtudiantsWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.EvaluationEtudiantsScalarFieldEnum[];
}
declare const FindManyEvaluationEtudiantsArgs_base: import("@nestjs/common").Type<Partial<FindManyEvaluationEtudiantsArgsStrict>>;
export declare class FindManyEvaluationEtudiantsArgs extends FindManyEvaluationEtudiantsArgs_base {
}
export declare class FindUniqueEvaluationEtudiantsArgs {
    where: EvaluationEtudiantsWhereUniqueInput;
}
export {};
