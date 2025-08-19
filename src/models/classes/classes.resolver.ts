import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ClassesService } from './classes.service';
import { Classe } from './entity/classe.entity';
import { FindManyClasseArgs, FindUniqueClasseArgs } from './dtos/find.args';
import { CreateClasseInput } from './dtos/create-classe.input';
import { UpdateClasseInput } from './dtos/update-classe.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Semestre } from '../semestres/entity/semestre.entity';
import { Etudiant } from '../etudiants/entity/etudiant.entity';
import { Inscription } from '../inscriptions/entity/inscription.entity';
import { EvaluationEtudiants } from '../evaluation-etudiants/entity/evaluation-etudiants.entity';
import { AnneeScolaire } from '../annee-scolaires/entity/annee-scolaire.entity';
import { Specialite } from '../specialites/entity/specialite.entity';
import { Cours } from '../cours/entity/cours.entity';
import { UniteEnseignement } from '../unite-enseignements/entity/unite-enseignement.entity';

@Resolver(() => Classe)
export class ClassesResolver {
  constructor(
    private readonly classesService: ClassesService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  createClasse(
    @Args('createClasseInput') args: CreateClasseInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.classesService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Classe], { name: 'classes' })
  async findAll(@Args() args: FindManyClasseArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user)
    if (affiliation) {
      return this.classesService.findAllByEtablissement(args, affiliation.etablissementId);
    }
    return this.classesService.findAll(args);
  }

  @Query(() => Classe, { name: 'classe' })
  findOne(@Args() args: FindUniqueClasseArgs) {
    return this.classesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  async updateClasse(
    @Args('updateClasseInput') args: UpdateClasseInput,
    @GetUser() user: GetUserType,
  ) {
    const classe = await this.prisma.classe.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, classe.uid)
    return this.classesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  async removeClasse(
    @Args() args: FindUniqueClasseArgs,
    @GetUser() user: GetUserType,
  ) {
    const classe = await this.prisma.classe.findUnique(args);
    // checkRowLevelPermission(user, classe.uid)
    return this.classesService.remove(args);
  }

  @ResolveField(() => [Semestre])
  async semestres(@Parent() parent: Classe) {
    // Récupérer les semestres via les UE de la classe
    const ues = await this.prisma.uniteEnseignement.findMany({
      where: { classeId: parent.id },
      include: { semestre: true },
      distinct: ['semestreId'],
    });
    
    // Retourner les semestres uniques avec leurs UE et matières
    const semestres = await this.prisma.semestre.findMany({
      where: { 
        id: { in: ues.map(ue => ue.semestreId) }
      },
      include: {
        uniteEnseignement: {
          where: { classeId: parent.id }, // Filtrer les UE de cette classe uniquement
          include: {
            matieres: true,
          },
        },
      },
    });
    
    return semestres;
  }

  @ResolveField(() => [Inscription])
  async inscriptions(@Parent() parent: Classe) {
    return this.prisma.inscription.findMany({
      where: { classeId: parent.id },
      include: { etudiant: true },
    });
  }

/*  @ResolveField(() => [EvaluationEtudiants])
  async evaluations(@Parent() parent: Classe) {
    const cours = await this.prisma.cours.findMany({
      where: { classeId: parent.id },
    });
    const evaluationEtudiants = [];
    for (const cour of cours) {
      const evaluationEtudiant = await this.prisma.evaluationEtudiants.findMany(
        {
          where: { coursId: cour.id },
        },
      );
      evaluationEtudiants.push(evaluationEtudiant);
    }
    return new Promise((resolve, reject) => {
      resolve(evaluationEtudiants);
      reject([]);
    });
  }*/

  @ResolveField(() => [EvaluationEtudiants])
  async evaluations(@Parent() parent: Classe) {
    const cours = await this.prisma.cours.findMany({
      where: { classeId: parent.id },
    });
  
    const evaluationEtudiants = [];
  
    for (const cour of cours) {
      const evaluations = await this.prisma.evaluationEtudiants.findMany({
        where: { coursId: cour.id },
      });
      evaluationEtudiants.push(...evaluations);
    }
  
    return evaluationEtudiants;
  }
  


  @ResolveField(() => AnneeScolaire)
  async anneeScolaire(@Parent() parent: Classe) {
    return this.prisma.anneeScolaire.findUnique({
      where: { id: parent.anneeScolaireId },
    });
  }

  @ResolveField(() => Specialite)
  async specialite(@Parent() parent: Classe) {
    return this.prisma.specialite.findUnique({
      where: { id: parent.specialiteId },
    });
  }

  @ResolveField(() => [Cours])
  async cours(@Parent() parent: Classe) {
    return this.prisma.cours.findMany({
      where: { classeId: parent.id },
    });
  }

  @ResolveField(() => [UniteEnseignement])
  async uniteEnseignements(@Parent() parent: Classe) {
    return this.prisma.uniteEnseignement.findMany({
      where: { classeId: parent.id },
      include: { 
        semestre: true,
        matieres: true 
      },
    });
  }

}
