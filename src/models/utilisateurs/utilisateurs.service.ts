import { Injectable } from '@nestjs/common';
import {
  FindManyUtilisateurArgs,
  FindUniqueUtilisateurArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUtilisateurInput } from './dtos/create-utilisateur.input';
import { UpdateUtilisateurInput } from './dtos/update-utilisateur.input';
import { Prisma } from '@prisma/client';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class UtilisateursService {
  constructor(
    private readonly prisma: PrismaService,
    private accountService: AccountsService,
  ) {}
  async create(createUtilisateurInput: CreateUtilisateurInput) {
    // create user without account
    const { account, ...userData } = createUtilisateurInput;
    const utilisateur = this.prisma.utilisateur.create({
      data: userData,
    });

    // create user account
    const createAccount = await this.accountService.create({
      username: createUtilisateurInput.account.username,
      password: createUtilisateurInput.account.password,
      roles: createUtilisateurInput.roles,
      userId: (await utilisateur).id,
    });

    // update utilisateur with account id
    const newUser = this.prisma.utilisateur.update({
      where: { id: (await utilisateur).id },
      data: {
        accountId: createAccount.id,
      },
    });

    return newUser;
  }

  findAll(args: FindManyUtilisateurArgs) {
    return this.prisma.utilisateur.findMany(args);
  }

  findOne(args: FindUniqueUtilisateurArgs) {
    return this.prisma.utilisateur.findUnique(args);
  }

  async findMe(uid: string) {
    const account = await this.prisma.account.findUnique({
      where: {
        uid: uid,
      },
    });
    return this.prisma.utilisateur.findUnique({
      where: {
        id: account.userId,
      },
    });
  }

  update(updateUtilisateurInput: UpdateUtilisateurInput) {
    const { id, ...data } = updateUtilisateurInput;
    return this.prisma.utilisateur.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueUtilisateurArgs) {
    return this.prisma.utilisateur.delete(args);
  }
}
