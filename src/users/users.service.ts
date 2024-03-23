import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async giveAward(params: {
    userId: string;
    awardId: string;
  }): Promise<UserDto> {
    const { userId, awardId } = params;

    const candidate = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (candidate == null) {
      await this.prisma.user.create({
        data: {
          id: userId,
        },
      });
    }

    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        awards: {
          connect: {
            id: awardId,
          },
        },
      },
      include: {
        awards: true,
      },
    });
  }

  async user(params: { id: string }): Promise<UserDto> {
    const { id } = params;

    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        awards: true,
      },
    });
  }
}
