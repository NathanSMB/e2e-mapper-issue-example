import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestlibModule } from '@lib/testlib';

console.log(TestlibModule);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
