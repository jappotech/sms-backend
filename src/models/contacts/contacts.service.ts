import { Injectable } from '@nestjs/common'
import { FindManyContactArgs, FindUniqueContactArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateContactInput } from './dtos/create-contact.input'
import { UpdateContactInput } from './dtos/update-contact.input'

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createContactInput: CreateContactInput) {
    return this.prisma.contact.create({
      data: createContactInput,
    })
  }

  findAll(args: FindManyContactArgs) {
    return this.prisma.contact.findMany(args)
  }

  findOne(args: FindUniqueContactArgs) {
    return this.prisma.contact.findUnique(args)
  }

  update(updateContactInput: UpdateContactInput) {
    const { id, ...data } = updateContactInput
    return this.prisma.contact.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueContactArgs) {
    return this.prisma.contact.delete(args)
  }
}
