import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  async getHelloWorld() {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'capitao',
        name: 'Guilherme Capitão',
        function: 'Alcançar coisas no alto',
      },
    });
    return { member };
  }
}
