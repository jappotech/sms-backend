import { GetUserType, Role } from 'src/common/types';
import { ForbiddenException } from '@nestjs/common';
import { has } from 'lodash';
import { Account } from 'src/models/accounts/entity/account.entity';
import { PrismaService } from '../prisma/prisma.service';

const prisma = new PrismaService();

export const checkRowLevelPermission = (
  user: GetUserType,
  requestedUid?: string | string[],
  roles: Role[] = ['UTILISATEUR'],
) => {
  if (!requestedUid) return false;

  const hasRole = user.roles?.some((role) => roles.includes(role));

  if (!hasRole) throw new ForbiddenException();

  return true;

  /* const uids =
    typeof requestedUid === 'string'
      ? [requestedUid]
      : requestedUid.filter(Boolean)

  if (!uids.includes(user.uid)) {
    throw new ForbiddenException()
  } */
};

export const checkUserAffiliation = async (user: GetUserType) => {
  const account: Account = await prisma.account.findUnique({
    where: { uid: user.uid },
  });
  const utilisateur = await prisma.utilisateur.findUnique({
    where: { id: account.userId },
  });
  if (
    utilisateur.roles.includes('SUPER_ADMIN') ||
    utilisateur.roles.includes('SUPER_USER')
  ) {
    return;
  } else {
    return utilisateur;
  }
};
