import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { AwardsModule } from './awards/awards.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    HttpModule,
    AwardsModule,
    AuthModule,
    JwtModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'swagger'),
      serveStaticOptions: {},
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
