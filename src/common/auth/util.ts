import { GetUserType } from 'src/common/types';
import { ForbiddenException } from '@nestjs/common';
import { has } from 'lodash';
import { Account } from 'src/models/accounts/entity/account.entity';
import { PrismaService } from '../prisma/prisma.service';

const prisma = new PrismaService();

export const checkRowLevelPermission = (
  user: GetUserType,
  requestedUid?: string | string[],
  roles: string[] = ['UTILISATEUR'],
) => {
  if (!requestedUid) return false;

  const hasRole = roles.includes(user.role);

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
  // Ensure payload contains the bound Utilisateur ID
  if (user.userId == null) {
    throw new ForbiddenException('Utilisateur non identifié');
  }

  // In the schema, Account has a relation to Utilisateur via userId (number).
  // We should query Account by userId, not by Account.id.
  const account = await prisma.account.findFirst({
    where: { userId: user.userId },
  });

  if (!account) {
    throw new ForbiddenException('Compte introuvable pour cet utilisateur');
  }

  // SUPER roles bypass affiliation filters
  if (account.roles.includes('SUPER_ADMIN') || account.roles.includes('SUPER_USER')) {
    return;
  }

  const utilisateur = await prisma.utilisateur.findUnique({
    where: { id: user.userId },
  });

  if (!utilisateur) {
    throw new ForbiddenException('Utilisateur introuvable');
  }
  return utilisateur;
}
