import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { FeuillePresenceListRelationFilter } from 'src/models/feuille-presences/dtos/where.args';
import { InscriptionListRelationFilter } from 'src/models/inscriptions/dtos/where.args';
import { NoteEtudiantListRelationFilter } from 'src/models/note-etudiants/dtos/where.args';
import { PaiementListRelationFilter } from 'src/models/paiements/dtos/where.args';
import { UtilisateurRelationFilter } from 'src/models/utilisateurs/dtos/where.args';
export declare class EtudiantWhereUniqueInput {
    id: number;
}
export declare class EtudiantWhereInputStrict implements RestrictProperties<EtudiantWhereInputStrict, Prisma.EtudiantWhereInput> {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    slug: StringFilter;
    ine: StringFilter;
    baccaleaureat: StringFilter;
    anneeBaccaleaureat: IntFilter;
    profileId: IntFilter;
    feuillePresencesId: IntFilter;
    profile: UtilisateurRelationFilter;
    inscriptions: InscriptionListRelationFilter;
    notes: NoteEtudiantListRelationFilter;
    feuillePresences: FeuillePresenceListRelationFilter;
    Paiement: PaiementListRelationFilter;
    AND: EtudiantWhereInputStrict[];
    OR: EtudiantWhereInputStrict[];
    NOT: EtudiantWhereInputStrict[];
}
declare const EtudiantWhereInput_base: import("@nestjs/common").Type<Partial<EtudiantWhereInputStrict>>;
export declare class EtudiantWhereInput extends EtudiantWhereInput_base {
    id: IntFilter;
    createdAt: DateTimeFilter;
    updatedAt: DateTimeFilter;
    slug: StringFilter;
    ine: StringFilter;
    baccaleaureat: StringFilter;
    anneeBaccaleaureat: IntFilter;
    profileId: IntFilter;
    feuillePresencesId: IntFilter;
    profile: UtilisateurRelationFilter;
    inscriptions: InscriptionListRelationFilter;
    notes: NoteEtudiantListRelationFilter;
    feuillePresences: FeuillePresenceListRelationFilter;
    Paiement: PaiementListRelationFilter;
    AND: EtudiantWhereInput[];
    OR: EtudiantWhereInput[];
    NOT: EtudiantWhereInput[];
}
export declare class EtudiantListRelationFilter {
    every?: EtudiantWhereInput;
    some?: EtudiantWhereInput;
    none?: EtudiantWhereInput;
}
export declare class EtudiantRelationFilter {
    is?: EtudiantWhereInput;
    isNot?: EtudiantWhereInput;
}
export {};
