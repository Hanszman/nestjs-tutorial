import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    PrismaRocketMembersRepository,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
