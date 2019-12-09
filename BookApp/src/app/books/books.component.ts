import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BooksService } from '../books.service';
import { Collection } from '../models/Collection';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe((collection: Collection) =>
        this.books = collection.items
      )
  }

}
