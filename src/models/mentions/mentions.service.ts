import { Injectable } from '@nestjs/common';
import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMentionInput } from './dtos/create-mention.input';
import { UpdateMentionInput } from './dtos/update-mention.input';
import { Prisma } from '@prisma/client';
import slugify from 'slugify';

@Injectable()
export class MentionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMentionInput: CreateMentionInput) {
    const { specialites, ...data } = createMentionInput;
    const slug = slugify(`${createMentionInput.nom.toLowerCase()}`);
    const createMention = this.prisma.mention.create({
      data: { ...data, slug },
    });

    const mention = await createMention;
    if (specialites && specialites.length > 0) {
      const specialitesData = specialites.map((specialite) => ({
        ...specialite,
        slug: slugify(`${specialite.nom.toLowerCase()}`),
        mentionId: mention.id,
      }));
      const createSpecialites = await this.prisma.specialite.createMany({
        data: specialitesData,
      });
      console.log(
        '🚀 ~ MentionsService ~ create ~ createSpecialites:',
        createSpecialites,
      );
    }

    return createMention;
  }

  findAll(args: FindManyMentionArgs) {
    return this.prisma.mention.findMany(args);
  }

  findAllByEtablissement(args: FindManyMentionArgs, etablissementId: number) {
    return this.prisma.mention.findMany({
      ...args,
      where: {
        ...args.where,
        domaine: {
          is: {
            etablissements: {
              some: {
                id: etablissementId,
              },
            },
          },
        },
      },
    });
  }

  findOne(args: FindUniqueMentionArgs) {
    return this.prisma.mention.findUnique(args);
  }

  update(updateMentionInput: UpdateMentionInput) {
    const { id, specialites, ...data } = updateMentionInput;
    return this.prisma.mention.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueMentionArgs) {
    return this.prisma.mention.delete(args);
  }
}
