import { GetUserType, Role } from 'src/common/types'
import { ForbiddenException } from '@nestjs/common'
import { has } from 'lodash'

export const checkRowLevelPermission = (
  user: GetUserType,
  requestedUid?: string | string[],
  roles: Role[] = ['UTILISATEUR'],
) => {

  if (!requestedUid) return false

  const hasRole = user.roles?.some((role) => roles.includes(role))

  if (!hasRole) throw new ForbiddenException()

  return true

  /* const uids =
    typeof requestedUid === 'string'
      ? [requestedUid]
      : requestedUid.filter(Boolean)

  if (!uids.includes(user.uid)) {
    throw new ForbiddenException()
  } */
}
