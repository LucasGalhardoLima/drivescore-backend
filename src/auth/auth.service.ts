import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Auth } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<Auth> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      throw new NotFoundException(`User with email: ${email} not found`);

    bcrypt.compare(password, user.password).then((result) => {
      if (!result) throw new UnauthorizedException('Invalid password');
    });

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  validateUser(userId: string) {
    return this.prisma.user.findFirst({ where: { id: userId, admin: true } });
  }
}
