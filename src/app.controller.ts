import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { CreateTeamMemberBody } from './dtos/create-team-member.body';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private rocketMembersRepository: RocketMembersRepository,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('hello')
  async postHelloWorld(@Body() body: CreateTeamMemberBody) {
    console.log(body);
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
