import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}
    
    findAll() {
        console.log('Calling Service User');
        return this.usersClient.send('users.findAll', {});
    }
}
