import { Injectable } from '@nestjs/common';
import { FindManyEtudiantArgs, FindUniqueEtudiantArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEtudiantInput } from './dtos/create-etudiant.input';
import { UpdateEtudiantInput } from './dtos/update-etudiant.input';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
import slugify from 'slugify';

@Injectable()
export class EtudiantsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utilisateurService: UtilisateursService,
  ) {}
  async create(createEtudiantInput: CreateEtudiantInput) {
    // create utilisateur
    const utilisateur = await this.utilisateurService.create(
      createEtudiantInput.profile,
    );

    // create etudiant without profile
    const { profile, ...studentData } = createEtudiantInput;
    const slug = slugify(
      `${profile.nom.toLowerCase()} ${utilisateur.accountId} ${profile.prenom.toLowerCase()}`,
    );
    return this.prisma.etudiant.create({
      data: {
        ...studentData,
        profileId: utilisateur.id,
        slug,
        ine: studentData.ine || slug,
      },
    });
  }

  findAll(args: FindManyEtudiantArgs) {
    return this.prisma.etudiant.findMany(args);
  }

  findOne(args: FindUniqueEtudiantArgs) {
    return this.prisma.etudiant.findUnique(args);
  }

  async update(updateEtudiantInput: UpdateEtudiantInput) {
    const { id, profile, ...data } = updateEtudiantInput;
    if (profile.id)
      await this.utilisateurService.update({ id: profile.id, ...profile });
    return this.prisma.etudiant.update({
      where: { id },
      data: { ...data, profileId: profile.id },
    });
  }

  remove(args: FindUniqueEtudiantArgs) {
    return this.prisma.etudiant.delete(args);
  }
}
