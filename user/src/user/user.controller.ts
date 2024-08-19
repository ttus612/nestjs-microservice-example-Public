import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('users.findAll')
  findAll(){
    return this.userService.findAll();
  }

  // Create methoad create user
  
  // Create methoad update user
  // Create methoad delete user
  // Create methoad find user

}
