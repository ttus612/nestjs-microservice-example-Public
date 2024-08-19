import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all-user')
  findAll() {
      return this.userService.findAll();
  }

  @Get('call')
  hello() {
      return "Calling Service User";
  }
}
