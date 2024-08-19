import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BookService {
  constructor(@Inject('BOOK_CLIENT') private booksClient: ClientProxy) {}


  create(createBookDto: CreateBookDto) {
    return this.booksClient.send('book.createBook', createBookDto) 
  }

  findAll() {
    return this.booksClient.send('book.findAllBook', {})  
  }

  findOne(id: number) {
    return this.booksClient.send('book.findOneBook', id) 
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send('book.updateBook', {id, ...updateBookDto}) 
  }

  remove(id: number) {
    return this.booksClient.send('book.removeBook', id)
  }
}
