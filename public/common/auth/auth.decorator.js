"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.AllowAuthenticated = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const graphql_1 = require("@nestjs/graphql");
const AllowAuthenticated = (...roles) => (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(auth_guard_1.AuthGuard));
exports.AllowAuthenticated = AllowAuthenticated;
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const context = graphql_1.GqlExecutionContext.create(ctx);
    return context.getContext().req.user;
});
//# sourceMappingURL=auth.decorator.js.map