import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    getHello(): string {
        return 'Hello World!';
      }
    private users: UserDto[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          age: 25,
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          age: 25,
        },
        {
            id: 3,
            firstName: 'Jane',
            lastName: 'Doe',
            age: 25,
          },
      ];
    
    findAll(){
        return this.users;
    }
    
}
