import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { race } from 'rxjs';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: 5
    },{
      id: 2,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      rating: 4
    }
  ]

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1
    }

    this.books.push(newBook)
    return newBook
  }

  findAll() {
    return this.books
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
