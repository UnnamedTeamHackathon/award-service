import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [AwardsService],
  controllers: [AwardsController],
  imports: [PrismaModule, JwtModule, HttpModule],
})
export class AwardsModule {}
