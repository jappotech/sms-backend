import { Injectable } from '@nestjs/common'
import { FindManyAccountArgs, FindUniqueAccountArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAccountInput } from './dtos/create-account.input'
import { UpdateAccountInput } from './dtos/update-account.input'
import { randomUUID } from 'crypto'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createAccountInput: CreateAccountInput) {
    const uid = randomUUID()
    createAccountInput.password = await bcrypt.hash(createAccountInput.password, 10);
    return this.prisma.account.create({
      data: { ...createAccountInput, uid, isActive: true, createdAt: new Date() },
    })
  }

  findAll(args: FindManyAccountArgs) {
    return this.prisma.account.findMany(args)
  }

  findOne(args: FindUniqueAccountArgs) {
    return this.prisma.account.findUnique(args)
  }

  update(updateAccountInput: UpdateAccountInput) {
    const { id, ...data } = updateAccountInput
    return this.prisma.account.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAccountArgs) {
    return this.prisma.account.delete(args)
  }
}
