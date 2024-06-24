"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserAffiliation = exports.checkRowLevelPermission = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma = new prisma_service_1.PrismaService();
const checkRowLevelPermission = (user, requestedUid, roles = ['UTILISATEUR']) => {
    if (!requestedUid)
        return false;
    const hasRole = user.roles?.some((role) => roles.includes(role));
    if (!hasRole)
        throw new common_1.ForbiddenException();
    return true;
};
exports.checkRowLevelPermission = checkRowLevelPermission;
const checkUserAffiliation = async (user) => {
    const account = await prisma.account.findUnique({
        where: { uid: user.uid },
    });
    const utilisateur = await prisma.utilisateur.findUnique({
        where: { id: account.userId },
    });
    if (utilisateur.roles.includes('SUPER_ADMIN') ||
        utilisateur.roles.includes('SUPER_USER')) {
        return;
    }
    else {
        return utilisateur;
    }
};
exports.checkUserAffiliation = checkUserAffiliation;
//# sourceMappingURL=util.js.map