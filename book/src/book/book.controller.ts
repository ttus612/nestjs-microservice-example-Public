import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern('book.createBook')
  create(@Payload() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @MessagePattern('book.findAllBook')
  findAll() {
    return this.bookService.findAll();
  }

  @MessagePattern('book.findOneBook')
  findOne(@Payload() id: number) {
    return this.bookService.findOne(id);
  }

  @MessagePattern('book.updateBook')
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.bookService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern('book.removeBook')
  remove(@Payload() id: number) {
    return this.bookService.remove(id);
  }
}
