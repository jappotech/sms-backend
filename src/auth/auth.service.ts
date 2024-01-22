import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginInput } from './dtos/login.input';

@Injectable()
export class AuthService {

  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prismaService.account.findUnique({ where: { username: username } });

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (!isMatch) {
        return null;
      }
      const { password, id, userId, createdAt, updatedAt, username, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginInput) {
    const payload = await this.validateUser(user.username, user.password);
    if (!payload) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const access_token = this.jwtService.sign(payload)
    return {
      access_token,
    };
  }

}
