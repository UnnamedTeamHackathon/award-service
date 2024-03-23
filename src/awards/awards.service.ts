import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AwardDto } from './dto/award.dto';

@Injectable()
export class AwardsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(params: { name: string }): Promise<AwardDto> {
    const { name } = params;

    return this.prisma.award.create({
      data: {
        name,
      },
    });
  }

  async award(params: { id: string }): Promise<AwardDto> {
    const { id } = params;

    return this.prisma.award.findUnique({
      where: {
        id,
      },
    });
  }

  async all(): Promise<AwardDto[]> {
    return this.prisma.award.findMany();
  }
}
